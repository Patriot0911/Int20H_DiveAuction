import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/modules/db/services/db.service';

@Injectable()
export class AuctionWinnerService {
  private readonly aucWinRepository: Prisma.AuctionWinnerDelegate;
  private readonly aucRepository: Prisma.AuctionDelegate;

  constructor(db: DbService) {
    this.aucWinRepository = db.auctionWinner;
    this.aucRepository = db.auction;
  }

  async findAuctionsWonByUserId(userId: number) {
    const auctionsWins = await this.aucWinRepository.findMany({
      where: { userId },
    });

    const auctionIds = auctionsWins.map((auctionWin) => auctionWin.auctionId);

    const auctions = [];
    for (const id of auctionIds) {
      const auction = await this.aucRepository.findUnique({
        where: { id },
      });
      auctions.push(auction);
    }

    return auctions;
  }
}
