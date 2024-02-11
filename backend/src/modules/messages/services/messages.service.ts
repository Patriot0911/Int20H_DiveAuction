import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from 'src/modules/db/services/db.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class MessagesService {
  private readonly repository: Prisma.MessageDelegate;

  constructor(private readonly db: DbService) {
    this.repository = db.message;
  }

  async create(auctionId: number, userId: number, content: string) {
    const users = await this.db.bid
      .findMany({
        where: { auctionId },
        select: { userId: true },
      })
      .then((bids) => bids.map(({ userId }) => userId));
    if (!users.includes(userId))
      throw new BadRequestException(
        'Only bidders of that aunction can send messages to the chat',
      );
    return await this.repository.create({
      data: {
        auctionId,
        userId,
        content,
      },
    });
  }
}
