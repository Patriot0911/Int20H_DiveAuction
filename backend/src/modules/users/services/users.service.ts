import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from 'src/modules/db/services/db.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  private readonly repository: Prisma.UserDelegate;

  constructor(db: DbService) {
    this.repository = db.user;
  }

  async findMany() {
    const users = await this.repository.findMany();
    return users;
  }

  async findUnique(id: number) {
    try {
      const user = await this.repository.findUnique({
        where: {
          id: id,
        },
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      return user;
    } catch (e: any) {
      return e;
    }
  }
}
