import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/modules/db/services/db.service';

@Injectable()
export class MyAuctionService {
  private readonly repository: Prisma.AuctionDelegate;

  constructor(db: DbService) {
    this.repository = db.auction;
  }

  async findMyAuctions(id: number) {
    const myAuctions = await this.repository.findMany({
      where: {
        userId: id,
      },
    });

    return myAuctions;
  }
}
