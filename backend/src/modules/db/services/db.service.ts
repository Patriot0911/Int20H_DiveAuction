import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DbService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
    this.$queryRaw`CREATE EXTENSION IF NOT EXISTS pg_trgm;`;
  }
}
