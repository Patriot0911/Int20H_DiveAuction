import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from 'src/modules/db/services/db.service';
import {
  hashPassword,
  validatePassword,
  generatePassword,
} from 'src/common/security';
import type { Prisma, User } from '@prisma/client';
import type { FastifySessionObject } from '@fastify/session';
import type { Profile } from '../interfaces/profile.interface';

@Injectable()
export class AuthService {
  private readonly repository: Prisma.UserDelegate;
  constructor(db: DbService) {
    this.repository = db.user;
  }

  async useGoogleOAuth(profile: Profile): Promise<User> {
    if (!profile.email.verified)
      throw new BadRequestException(
        'That account cannot be used for signing up. Email not verified',
      );
    const user = await this.repository.findUnique({
      where: { email: profile.email.value },
    });
    if (user) return user;
    const { hash } = await generatePassword();
    // TODO: Send verification email with password
    {
      const user = await this.repository.create({
        data: {
          email: profile.email.value,
          name: profile.displayName,
          photo: profile.photo,
          password: hash,
        },
      });
      return user;
    }
  }

  startSession(session: FastifySessionObject, user: User): void {
    const { id, email, verified } = user;
    session.set('user', { id, email, verified });
  }

  async endSession(session: FastifySessionObject): Promise<void> {
    await session.destroy();
  }

  async register(name: string, email: string, password: string): Promise<User> {
    const account = await this.repository.findUnique({ where: { email } });
    if (account) throw new BadRequestException('Email already in use');
    const hash = await hashPassword(password);
    // TODO: Send verification email
    return await this.repository.create({
      data: { name, email, password: hash },
    });
  }

  async authenticate(email: string, password: string): Promise<User | null> {
    const user = await this.repository.findUnique({ where: { email } });
    if (!user) return null;
    const valid = await validatePassword(password, user.password);
    return valid ? user : null;
  }
}
