import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/modules/db/services/db.service';

@Injectable()
export class MeService {
  private readonly repository: Prisma.FavoriteDelegate;

  constructor(db: DbService) {
    this.repository = db.favorite;
  }
}
