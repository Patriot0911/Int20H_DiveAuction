import { Module } from '@nestjs/common';
import { MeController } from './controllers/me.controller';
import { MeService } from './services/me.service';
import { FavoriteService } from './services/favorite.service';
import { AuctionService } from '../auctions/services/auctions.service';

@Module({
  providers: [MeService, AuctionService, FavoriteService],
  controllers: [MeController],
})
export class MeModule {}
