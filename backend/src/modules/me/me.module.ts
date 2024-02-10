import { Module } from '@nestjs/common';
import { MeController } from './controllers/me.controller';
import { MeService } from './services/me.service';
import { FavoriteService } from './services/favorite.service';
import { AuctionWinnerService } from './services/auction-winner.service';
import { MyAuctionService } from './services/my-auction.service';

@Module({
  providers: [
    MeService,
    MyAuctionService,
    AuctionWinnerService,
    FavoriteService,
  ],
  controllers: [MeController],
})
export class MeModule {}
