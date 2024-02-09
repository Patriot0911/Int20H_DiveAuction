import {
  Controller,
  Param,
  Get,
  Query,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { AuctionService } from '../services/auctions.service';
import { BidsService } from 'src/modules/bids/services/bids.service';
import { UsersService } from 'src/modules/users/services/users.service';

@Controller('/auctions')
export class AuctionsController {
  constructor(
    private readonly auctionsService: AuctionService,
    private readonly bidsService: BidsService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async getAllAuctions(
    @Query('skip', ParseIntPipe) skip: number,
    @Query('take', ParseIntPipe) take: number,
  ) {
    const auctions = await this.auctionsService.findMany(skip, take);

    return auctions;
  }

  @Get(':id')
  async getAuctionById(@Param('id', ParseIntPipe) id: number) {
    const auction = await this.auctionsService.findUnique(id);
    if (!auction) throw new NotFoundException('Auction not found');

    const bids = await this.bidsService.findByAuctionId(id);
    const userIds = new Set<number>();

    for (const bid of bids) {
      userIds.add(bid.userId);
    }

    const activeUsers = [];

    for (const id of userIds) {
      const user = await this.usersService.findUnique(id);
      activeUsers.push(user);
    }

    return { auction, bids, userIds };
  }
}
