import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DbService } from 'src/modules/db/services/db.service';
import type { SessionStore as Store } from '@fastify/session';
import type { Prisma } from '@prisma/client';

interface SessionData {
  [key: string]: any;
}
interface Cache {
  session: any;
  timer: NodeJS.Timeout;
}

@Injectable()
export class SessionStore implements Store {
  private readonly repository: Prisma.SessionDelegate;
  private readonly cache = new Map<string, Cache>();
  private readonly cacheTimeout: number;

  constructor(db: DbService, config: ConfigService) {
    this.repository = db.session;
    this.cacheTimeout = config.get<number>('session.cacheTimeout');
  }

  get(id: string, cb): void {
    const cached = this.cache.get(id);
    if (cached) return void cb(null, cached.session);
    this.repository
      .findUnique({
        where: {
          id,
          expires: { gt: new Date() },
        },
      })
      .then((session) => {
        if (!session) return void cb(null, null);
        const data: SessionData = JSON.parse(session.data);
        cb(null, data);
      })
      .catch(cb);
  }

  set(id: string, payload, cb): void {
    const session = { ...payload };
    const expires: string = session.cookie.expires;
    const data = JSON.stringify(session);
    const cache = this.cache.get(id);
    this.cache.set(id, {
      session,
      timer: setTimeout(() => {
        this.cache.delete(id);
      }, this.cacheTimeout),
    });
    if (cache) clearTimeout(cache.timer);
    this.repository
      .upsert({
        where: { id },
        update: { data, expires },
        create: { id, data, expires },
      })
      .then(() => {
        cb(null);
      })
      .catch(cb);
  }

  destroy(id: string, cb): void {
    const cache = this.cache.get(id);
    if (cache) clearTimeout(cache.timer);
    this.cache.delete(id);
    this.repository
      .delete({
        where: { id },
      })
      .then(() => {
        cb(null);
      })
      .catch(() => {
        /* NOOP */
      });
  }
}
