import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/modules/db/services/db.service';

@Injectable()
export class FavoriteService {
  private readonly favRepository: Prisma.FavoriteDelegate;
  private readonly aucRepository: Prisma.AuctionDelegate;

  constructor(db: DbService) {
    this.favRepository = db.favorite;
    this.aucRepository = db.auction;
  }

  async getFavorites(userId: number) {
    const favorites = await this.favRepository.findMany({
      where: { userId },
    });

    const aucIds: Array<number> = [];
    for (const item of favorites) {
      aucIds.push(item.auctionId);
    }

    const favAuctions = [];
    for (const id of aucIds) {
      const auction = await this.aucRepository.findUnique({
        where: { id },
      });
      favAuctions.push(auction);
    }

    return favAuctions;
  }
}
