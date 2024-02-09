import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from 'src/modules/db/services/db.service';
import { AppGateway, Events } from 'src/modules/gateway';
import { Queue } from 'src/common/utils/queue';
import { AuctionStatus, Bid, type User } from '@prisma/client';

interface JobTask {
  user: User;
  auctionId: number;
  price: number;
}

export interface JobRes {
  bid: Bid;
  activeUsers: number[];
}

@Injectable()
export class BidsService {
  private readonly queue: Queue;

  constructor(
    private readonly gateway: AppGateway,
    db: DbService,
  ) {
    this.queue = new Queue({
      handler: async ({ user, auctionId, price }: JobTask) => {
        const [auction, lastBid, users] = await Promise.all([
          db.auction.findUnique({ where: { id: auctionId } }),
          db.bid.findFirst({
            where: { auctionId },
            orderBy: { id: 'desc' },
          }),
          db.user.findMany({
            where: {
              auctions: { some: { id: auctionId } },
            },
            select: { id: true },
          }),
        ]);
        if (!auction) throw new BadRequestException('Auction not found');
        if (auction.status !== AuctionStatus.active)
          throw new BadRequestException('Cannot bid on that auction');
        if (lastBid?.price >= price)
          throw new BadRequestException(
            'Price of the bid should be greater than the last one',
          );
        const bid = await db.bid.create({
          data: {
            price,
            auctionId,
            userId: user.id,
          },
        });
        const activeUsers = [
          ...new Set(users.map(({ id }) => id)).add(user.id),
        ];
        return { auctionId, bid, activeUsers };
      },
      concurrency: 1,
      timeout: 10000,
    });
  }

  async createBid(task: JobTask) {
    const res: JobRes = await this.queue.exec(task);
    this.gateway.emit(Events.NEW_BID, res);
    return res;
  }
}
