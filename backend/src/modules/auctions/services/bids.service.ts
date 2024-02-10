import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from 'src/modules/db/services/db.service';
import { AppGateway, Events } from 'src/gateway';
import { Queue } from 'src/common/utils/queue';
import { AuctionStatus, type Bid, type User } from '@prisma/client';

interface JobTask {
  user: User;
  auctionId: number;
  price: number;
}

export interface JobRes {
  auctionId: number;
  bid: Bid;
  activeUsers: number[];
}

@Injectable()
export class BidsService {
  private readonly queue: Queue;

  constructor(
    private readonly gateway: AppGateway,
    private readonly db: DbService,
  ) {
    this.queue = new Queue({
      handler: async ({ user, auctionId, price }: JobTask) => {
        const [auction, active] = await Promise.all([
          db.auction.findUnique({ where: { id: auctionId } }),
          this.getActiveByAuction(auctionId),
        ]);
        if (!auction) throw new BadRequestException('Auction not found');
        if (auction.status !== AuctionStatus.active)
          throw new BadRequestException('Cannot bid on that auction');
        const [lastBid, ...bids] = active;
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
          ...new Set(bids.map(({ user }) => user.id)).add(user.id),
        ];
        return { auctionId, bid, activeUsers };
      },
      concurrency: 1,
      timeout: 10000,
    });
  }

  async createBid(user: User, auctionId: number, price: number) {
    const res: JobRes = await this.queue.exec({ user, auctionId, price });
    this.gateway.emit(Events.NEW_BID, res);
    return res;
  }

  async getActiveByAuction(auctionId: number) {
    return await this.db.bid.findMany({
      where: { auctionId },
      orderBy: { id: 'desc' },
      include: { user: true },
    });
  }
}
