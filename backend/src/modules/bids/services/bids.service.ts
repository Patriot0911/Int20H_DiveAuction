import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/modules/db/services/db.service';

@Injectable()
export class BidsService {
  private readonly repository: Prisma.BidDelegate;

  constructor(db: DbService) {
    this.repository = db.bid;
  }

  async findByAuctionId(auctionId: number) {
    const bids = await this.repository.findMany({
      where: { auctionId },
    });

    return bids;
  }
}
