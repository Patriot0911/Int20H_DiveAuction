import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UseGuards,
} from '@nestjs/common';
import type { FastifySessionObject } from '@fastify/session';

type Request = {
  session?: FastifySessionObject;
};

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const req: Request = ctx.switchToHttp().getRequest();
    const { session } = req;
    return session && Object.keys(session).length > 1;
  }
}

export const Authorized = () => UseGuards(AuthGuard);
