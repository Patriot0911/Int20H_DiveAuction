import {
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Body,
  Patch,
} from '@nestjs/common';
import { AuctionService } from '../services/auctions.service';
import { BidsService } from '../services/bids.service';
import { Authorized } from 'src/common/guards/auth.guard';
import { VerifiedOnly } from '../guards/verified-only';
import { Upload } from 'src/common/interceptors/upload.interceptor';
import { CreateAuctionDto } from '../dtos/create-auction.dto';
import { UpdateAuctionDto } from '../dtos/update-auction.dto';
import { CreateBidDto } from '../dtos/create-bid';
import type { User } from '@prisma/client';

@Controller('/auctions')
export class AuctionsController {
  constructor(
    private readonly auctionsService: AuctionService,
    private readonly bidsService: BidsService,
  ) {}

  @Post()
  @VerifiedOnly()
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

  @Patch('/:id')
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

  @Post('/:id/bid')
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
