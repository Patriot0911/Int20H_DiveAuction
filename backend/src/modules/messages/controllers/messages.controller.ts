import {
  Controller,
  ForbiddenException,
  Get,
  Param,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { MessagesService } from '../services/messages.service';
import { Authorized } from 'src/common/guards/auth.guard';
import { BidsService } from 'src/modules/auctions/services/bids.service';

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly messages: MessagesService,
    private readonly bids: BidsService,
  ) {}

  @Get('/:auctionId')
  @Authorized()
  async getMessages(
    @Req() req: any,
    @Param('auctionId', ParseIntPipe) auctionId: number,
  ) {
    const { user } = req;
    const active = await this.bids.getActiveByAuction(auctionId);
    if (!active.find((bid) => bid.userId === user.id))
      throw new ForbiddenException(
        'Only bidders of that aunction can see the chat',
      );
    return await this.messages.getMessages(auctionId);
  }
}
