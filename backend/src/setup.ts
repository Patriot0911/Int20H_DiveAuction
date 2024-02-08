import cookiePlugin from '@fastify/cookie';
import sessionPlugin from '@fastify/session';
import multipartPlugin from '@fastify/multipart';
import { ConfigService } from '@nestjs/config';
import { SessionStore } from './common/session-store';
import type { SessionConfig } from 'types/config';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';

export const setup = async (app: NestFastifyApplication) => {
  const config = app.get(ConfigService);
  const sessionConfig = config.get<SessionConfig>('session');
  await app.register(cookiePlugin);
  await app.register(sessionPlugin, {
    ...sessionConfig,
    store: app.get(SessionStore),
  });
  await app.register(multipartPlugin);
  const fastify = app.getHttpAdapter().getInstance();

  // Add compatibility with Node-like response methods
  fastify.decorateReply('setHeader', function (name: string, value: string) {
    this.header(name, value);
  });
  fastify.decorateReply('end', function (payload?: unknown) {
    this.send(payload);
  });

  app.setGlobalPrefix('/api');
};
