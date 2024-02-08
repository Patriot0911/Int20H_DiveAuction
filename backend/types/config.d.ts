import { FastifySessionOptions } from '@fastify/session';

export interface SessionConfig extends FastifySessionOptions {
  cacheTimeout: number;
}
