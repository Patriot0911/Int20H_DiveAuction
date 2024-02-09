import { Module } from '@nestjs/common';
import { AuctionService } from './services/auctions.service';
import { AuctionsController } from './controllers/auctions.controller';
import { BidsService } from '../bids/services/bids.service';
import { UsersService } from '../users/services/users.service';

@Module({
  providers: [AuctionService, BidsService, UsersService],
  controllers: [AuctionsController],
})
export class AuctionsModule {}
