import { Get, Controller, Req, Post, Body, Delete } from '@nestjs/common';
import { Authorized } from 'src/common/guards/auth.guard';
import { FavoriteService } from '../services/favorite.service';
import { AuctionWinnerService } from '../services/auction-winner.service';
import { MyAuctionService } from '../services/my-auction.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { UserSerializationDto } from 'src/modules/auth/dtos/user.dto';
import { AddFavoriteDto } from '../dtos/add-favorite.dto';

@Controller('/me')
export class MeController {
  constructor(
    private readonly favoriteService: FavoriteService,
    private readonly auctionWinnerService: AuctionWinnerService,
    private readonly myAuctionService: MyAuctionService,
  ) {}

  @Get()
  @Authorized()
  @Serialize(UserSerializationDto)
  async getMe(@Req() req) {
    const user = req.user;
    return user;
  }

  @Get('/auctions')
  @Authorized()
  async getAuctions(@Req() req) {
    const userId = req.user.id;
    const myAuctions = await this.myAuctionService.findMyAuctions(userId);
    return myAuctions;
  }

  @Get('/favorites')
  @Authorized()
  async getFavorites(@Req() req) {
    const userId = req.user.id;
    const favorites = this.favoriteService.getFavorites(userId);
    return favorites;
  }

  @Post('/favorites')
  @Authorized()
  async addFavorite(@Req() req, @Body() { auctionId }: AddFavoriteDto) {
    const userId = req.user.id;
    await this.favoriteService.addFavorite(userId, auctionId);
    return { message: 'Added to favorites' };
  }

  @Delete('/favorites')
  @Authorized()
  async deleteFavorite(@Req() req, @Body() { auctionId }: AddFavoriteDto) {
    const userId = req.user.id;
    await this.favoriteService.deleteFavorite(userId, auctionId);
    return { message: 'Deleted from favorites' };
  }

  @Get('/won')
  @Authorized()
  async getWonAuctions(@Req() req) {
    const userId = req.user.userId;
    const auctionsWon =
      await this.auctionWinnerService.findAuctionsWonByUserId(userId);
    return auctionsWon;
  }
}
