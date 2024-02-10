import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import type { User } from '@prisma/client';

@Injectable()
export class VerifiedGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: User = request.user;
    const verified = user && user.verified;
    if (!verified)
      throw new ForbiddenException(
        'Your account should be verified to perform this action',
      );
    return verified;
  }
}

export const VerifiedOnly = () => UseGuards(VerifiedGuard);
