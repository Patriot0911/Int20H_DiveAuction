import {
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Body,
  Patch,
  Get,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { AuctionService } from '../services/auctions.service';
import { BidsService } from '../services/bids.service';
import { Authorized } from 'src/common/guards/auth.guard';
import { Upload } from 'src/common/interceptors/upload.interceptor';
import { CreateAuctionDto } from '../dtos/create-auction.dto';
import { UpdateAuctionDto } from '../dtos/update-auction.dto';
import { CreateBidDto } from '../dtos/create-bid.dto';
import { GetAuctionsDto } from '../dtos/get-auctions.dto';
import type { User } from '@prisma/client';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { UserSerializationDto } from 'src/modules/auth/dtos/user.dto';

@Controller()
export class AuctionsController {
  constructor(
    private readonly auctionsService: AuctionService,
    private readonly bidsService: BidsService,
  ) {}

  @Get('/categories')
  async getAllCategories() {
    return await this.auctionsService.getAllCategories();
  }

  @Get('/auctions')
  async getAll(@Query() query: GetAuctionsDto) {
    return await this.auctionsService.getAll(query);
  }

  @Serialize(UserSerializationDto, { nested: 'activeUsers' })
  @Get('/auctions/:id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const auction = await this.auctionsService.getOne(id);
    if (!auction) throw new NotFoundException('Auction not found');
    const images = await this.auctionsService.getAuctionImageUrls(id);
    const active = await this.bidsService.getActiveByAuction(id);
    // eslint-disable-next-line
    const bids = active.map(({ user, ...rest }) => ({ ...rest }));
    const activeUsers = active.map(({ user }) => user);
    return { auction, images, bids, activeUsers };
  }

  @Post('/auctions')
  @Authorized()
  @Upload({
    dir: 'auctions',
    mimeTypes: ['image/jpeg'],
    maxUploadedFiles: 5,
  })
  async create(@Req() req, @Body() data: CreateAuctionDto) {
    const user: User = req.user;
    return await this.auctionsService.create(user, data);
  }

  @Patch('/auctions/:id')
  @Authorized()
  @Upload({
    dir: 'auctions',
    mimeTypes: ['image/jpeg', 'image/jpg'],
    maxUploadedFiles: 5,
  })
  async update(
    @Req() req,
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateAuctionDto,
  ) {
    const user: User = req.user;
    return await this.auctionsService.update(user, id, data);
  }

  @Post('/auctions/:id/bid')
  @Authorized()
  async bid(
    @Req() req,
    @Param('id', ParseIntPipe) id: number,
    @Body() { price }: CreateBidDto,
  ) {
    const user: User = req.user;
    return await this.bidsService.createBid(user, id, price);
  }
}
