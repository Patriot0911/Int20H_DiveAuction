import { Get, Controller, Req } from '@nestjs/common';
import { Authorized } from 'src/common/guards/auth.guard';
import { AuctionService } from 'src/modules/auctions/services/auctions.service';
import { FavoriteService } from '../services/favorite.service';

@Controller('/me')
export class MeController {
  constructor(
    private readonly auctionService: AuctionService,
    private readonly favoriteService: FavoriteService,
  ) {}

  @Get()
  @Authorized()
  async getMe(@Req() req) {
    const user = req.user;
    return user;
  }

  @Get('/auctions')
  async getAuctions() {}

  @Authorized()
  @Get('/favorites')
  async getFavorites(@Req() req) {
    const userId = req.user.id;
    const favorites = this.favoriteService.getFavorites(userId);
    return favorites;
  }

  @Authorized()
  @Get('/won')
  async getWonAuctions() {}
}
