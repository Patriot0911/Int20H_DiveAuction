import { FastifySessionOptions } from '@fastify/session';

export interface SessionConfig extends FastifySessionOptions {
  cacheTimeout: number;
}

interface ServerConfig {
  port: string;
  prefix: string;
  cors: {
    origin: string;
    allowedHeaders: string[];
    allowedMethods: string;
  };
}
