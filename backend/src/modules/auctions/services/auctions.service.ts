import { BadRequestException, Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob, CronTime } from 'cron';
import { DbService } from 'src/modules/db/services/db.service';
import { updateUploads } from 'src/common/interceptors/upload.interceptor';
import { CreateAuctionDto } from '../dtos/create-auction.dto';
import { UpdateAuctionDto } from '../dtos/update-auction.dto';
import { Auction, AuctionStatus, Prisma, type User } from '@prisma/client';
import { GetAuctionsDto } from '../dtos/get-auctions.dto';

const SAFE_DELAY = 1000;
const DEFAULT_MAX_SEARCH = 5;
const SIMILIARITY_TRESHOLD = 0.3;

@Injectable()
export class AuctionService {
  constructor(
    private readonly scheduler: SchedulerRegistry,
    private readonly db: DbService,
  ) {}

  private updateSheduledAuction(id: number, dates: { start: Date; end: Date }) {
    for (const date of Object.keys(dates)) {
      const job = this.scheduler.getCronJob(`${date}-auction-${id}`);
      if (job) {
        const time = new CronTime(dates[date]);
        job.setTime(time);
      }
    }
  }

  private sheduleAuctionStart(id: number, date: Date) {
    const safeDate = new Date(date.getTime() + SAFE_DELAY);
    const job = new CronJob(safeDate, async () => {
      await this.db.auction.update({
        where: { id },
        data: { status: AuctionStatus.active },
      });
    });
    this.scheduler.addCronJob(`start-auction-${id}`, job);
    job.start();
  }

  private sheduleAuctionEnd(id: number, date: Date) {
    const job = new CronJob(date, async () => {
      await this.db.auction.update({
        where: { id },
        data: { status: AuctionStatus.finished },
      });
      await this.recordWinner(id);
    });
    this.scheduler.addCronJob(`end-auction-${id}`, job);
    job.start();
  }

  private sheduleAuction(auction: Auction) {
    const { id, startDate, endDate } = auction;
    if (!startDate || !endDate) return;
    this.sheduleAuctionStart(id, startDate);
    this.sheduleAuctionEnd(id, endDate);
  }

  private async recordWinner(auctionId: number) {
    const winner = await this.db.bid.findFirst({
      where: {
        auctionId,
      },
      orderBy: {
        id: 'desc',
      },
    });
    if (!winner) return;
    await this.db.auctionWinner.create({
      data: { auctionId, userId: winner.userId },
    });
  }

  async create({ id }: { id: number }, data: CreateAuctionDto) {
    const { uploaded, categoryId, ...fields } = data;
    const auction = await this.db.auction.create({
      data: {
        ...fields,
        endPrice: fields.startPrice,
        owner: { connect: { id } },
        category: { connect: { id: categoryId } },
      },
    });
    this.sheduleAuction(auction);
    await this.db.auctionImage.createMany({
      data: uploaded.map((url) => ({ url, auctionId: auction.id })),
    });
    return { auction, photos: uploaded };
  }

  async update(user: User, id: number, data: UpdateAuctionDto) {
    const { uploaded, photos, categoryId, ...fields } = data;
    const toUpdate: Prisma.AuctionUpdateInput = { ...fields };
    if (categoryId) toUpdate.category = { connect: { id: categoryId } };
    const auction = await this.db.auction
      .update({
        where: { id, ownerId: user.id, status: AuctionStatus.planned },
        data: toUpdate,
      })
      .catch(() => {
        throw new BadRequestException(
          'You can update only auctions belonging to you that are not started yet',
        );
      });
    const images = await this.getAuctionImageUrls(id);
    const set = new Set([...photos, ...images]);
    if (set.size > images.length)
      throw new BadRequestException(
        'You can update only photos attached to this auction',
      );
    updateUploads([...photos], uploaded);
    this.updateSheduledAuction(auction.id, {
      start: auction.startDate,
      end: auction.endDate,
    });
    return { auction, photos: images };
  }

  async getAuctionImageUrls(id: number) {
    return await this.db.auctionImage
      .findMany({
        select: { url: true },
        where: { auctionId: id },
        orderBy: { id: 'asc' },
      })
      .then((images) => images.map(({ url }) => url));
  }

  async getAllCategories() {
    return await this.db.category.findMany({
      select: { id: true, name: true },
    });
  }

  async getAll(query: GetAuctionsDto) {
    const { categoryId, ownerId, take, skip, orderBy, order, status, search } =
      query;
    const auctions: Auction[] = [];
    if (search) {
      const data = await this.search(search, take);
      auctions.push(...data);
    } else {
      const where: Prisma.AuctionWhereInput = {};
      if (categoryId) where.categoryId = categoryId;
      if (ownerId) where.ownerId = ownerId;
      if (status) where.status = status as AuctionStatus;
      const data = await this.db.auction.findMany({
        where,
        take,
        skip,
        orderBy: { [orderBy]: order },
      });
      auctions.push(...data);
    }
    const photos = await Promise.all(
      auctions.map(({ id }) => this.getAuctionImageUrls(id)),
    );
    return auctions.map((auction, i) => ({ auction, photos: photos[i] }));
  }

  async getOne(id: number) {
    return await this.db.auction.findUnique({ where: { id } });
  }

  async search(input: string, take: number = DEFAULT_MAX_SEARCH) {
    return (await this.db.$queryRaw`
      SELECT * 
      FROM auctions
      WHERE similarity(title, ${input}) > ${SIMILIARITY_TRESHOLD}
      ORDER BY similarity(title, ${input}) DESC
      LIMIT ${take};
    `) as Auction[];
  }
}
