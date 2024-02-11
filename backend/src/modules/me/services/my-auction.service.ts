import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/modules/db/services/db.service';

@Injectable()
export class MyAuctionService {
  private readonly repository: Prisma.AuctionDelegate;
  private readonly auctionImage: Prisma.AuctionImageDelegate;

  constructor(db: DbService) {
    this.repository = db.auction;
    this.auctionImage = db.auctionImage;
  }

  async findMyAuctions(id: number) {
    const myAuctions = await this.repository.findMany({
      where: {
        ownerId: id,
      },
    });
    const photos = await Promise.all(
      myAuctions.map((auction) =>
        this.auctionImage.findMany({
          where: {
            auctionId: auction.id,
          },
        }),
      ),
    );
    const res = myAuctions.map((auction, i) => ({
      auction,
      photos: photos[i].map((photo) => photo.url),
    }));
    return res;
  }
}
