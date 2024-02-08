import type { FastifyInstance } from 'fastify';

declare module 'fastify' {
  FastifyInstance;
  FastifyRequest;
  interface Session {
    user: {
      id: string;
      email: string;
      verified: boolean;
    };
  }
}
