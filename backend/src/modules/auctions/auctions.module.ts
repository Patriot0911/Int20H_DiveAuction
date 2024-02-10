import { Module } from '@nestjs/common';
import { AuctionService } from './services/auctions.service';
import { AuctionsController } from './controllers/auctions.controller';
import { BidsService } from '../auctions/services/bids.service';
import { UsersService } from '../users/services/users.service';
import { AppGateway } from 'src/gateway';

@Module({
  providers: [AppGateway, AuctionService, BidsService, UsersService],
  controllers: [AuctionsController],
})
export class AuctionsModule {}
