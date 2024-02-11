import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/modules/db/services/db.service';

@Injectable()
export class FavoriteService {
  private readonly favRepository: Prisma.FavoriteDelegate;
  private readonly aucRepository: Prisma.AuctionDelegate;
  private readonly auctionImage: Prisma.AuctionImageDelegate;

  constructor(db: DbService) {
    this.favRepository = db.favorite;
    this.aucRepository = db.auction;
    this.auctionImage = db.auctionImage;
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

    const photos = await Promise.all(
      favAuctions.map((auction) =>
        this.auctionImage.findMany({
          where: {
            auctionId: auction.id,
          },
        }),
      ),
    );
    const res = favAuctions.map((auction, i) => ({
      ...auction,
      photos: photos[i],
    }));

    return res;
  }
}
