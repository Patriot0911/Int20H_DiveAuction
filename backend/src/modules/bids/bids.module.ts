import { Module } from '@nestjs/common';
import { BidsService } from './services/bids.service';

@Module({
  providers: [BidsService],
})
export class BidsModule {}
