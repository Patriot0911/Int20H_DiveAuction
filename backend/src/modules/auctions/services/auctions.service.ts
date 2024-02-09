import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/modules/db/services/db.service';

@Injectable()
export class AuctionService {
  private readonly repository: Prisma.AuctionDelegate;

  constructor(db: DbService) {
    this.repository = db.auction;
  }

  async findMany(skip: number, take: number) {
    const auctions = await this.repository.findMany({
      skip,
      take,
    });

    return auctions;
  }

  async findUnique(id: number) {
    const auction = await this.repository.findUnique({
      where: { id },
    });

    return auction;
  }
}
