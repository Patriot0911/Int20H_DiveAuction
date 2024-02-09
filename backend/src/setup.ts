import multipartPlugin from '@fastify/multipart';
import { ConfigService } from '@nestjs/config';
import type { ServerConfig } from 'types/config';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';

export const setup = async (app: NestFastifyApplication) => {
  const config = app.get(ConfigService);
  await app.register(multipartPlugin);
  const fastify = app.getHttpAdapter().getInstance();

  // Add compatibility with native Node response methods
  fastify.decorateReply('setHeader', function (name: string, value: string) {
    this.header(name, value);
  });
  fastify.decorateReply('end', function (payload?: unknown) {
    this.send(payload);
  });

  const { cors, prefix } = config.get<ServerConfig>('server');
  app.enableCors(cors);
  app.setGlobalPrefix(prefix);
};
