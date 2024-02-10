import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from 'src/modules/db/services/db.service';
import { updateUploads } from 'src/common/interceptors/upload.interceptor';
import { CreateAuctionDto } from '../dtos/create-auction.dto';
import { UpdateAuctionDto } from '../dtos/update-auction.dto';
import { AuctionStatus, type Prisma, type User } from '@prisma/client';

const SAFE_TIME_TO_UPDATE = 1000 * 20; // 20 seconds

@Injectable()
export class AuctionService {
  private readonly auction: Prisma.AuctionDelegate;
  private readonly auctionImage: Prisma.AuctionImageDelegate;

  constructor(db: DbService) {
    this.auction = db.auction;
    this.auctionImage = db.auctionImage;
  }

  async create({ id }: { id: number }, data: CreateAuctionDto) {
    const { uploaded, categoryId, ...fields } = data;
    const auction = await this.auction.create({
      data: {
        ...fields,
        owner: { connect: { id } },
        category: { connect: { id: categoryId } },
      },
    });
    await this.auctionImage.createMany({
      data: uploaded.map((url) => ({ url, auctionId: auction.id })),
    });
    return { auction, photos: uploaded };
  }

  async update(user: User, id: number, data: UpdateAuctionDto) {
    const { uploaded, photos, categoryId, ...fields } = data;
    const toUpdate: Prisma.AuctionUpdateInput = { ...fields };
    if (categoryId) toUpdate.category = { connect: { id: categoryId } };
    const auction = await this.auction
      .update({
        where: { id, ownerId: user.id },
        data: toUpdate,
      })
      .catch(() => {
        throw new BadRequestException(
          'You can update only auctions belonging to you',
        );
      });
    const time = auction.endDate.getTime() - Date.now();
    if (auction.status !== AuctionStatus.planned || time < SAFE_TIME_TO_UPDATE)
      throw new BadRequestException(
        'You cannot update auction that already started or finished',
      );
    const images = await this.auctionImage
      .findMany({
        where: { auctionId: id },
      })
      .then((images) => images.map((i) => i.url));
    const set = new Set([...photos, ...images]);
    if (set.size > images.length)
      throw new BadRequestException(
        'You can update only photos attached to this auction',
      );
    updateUploads([...photos], uploaded);
    return { auction, photos: images };
  }
}
