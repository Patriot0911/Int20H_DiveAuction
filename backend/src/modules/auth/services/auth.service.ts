import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from 'src/modules/db/services/db.service';
import { JwtService } from '@nestjs/jwt';
import {
  hashPassword,
  validatePassword,
  generatePassword,
} from 'src/common/utils/security';
import type { Prisma, User } from '@prisma/client';
import type { JwtPayload, Profile } from '../interfaces/profile.interface';

@Injectable()
export class AuthService {
  private readonly repository: Prisma.UserDelegate;
  constructor(
    private readonly jwt: JwtService,
    db: DbService,
  ) {
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

  async issueToken(user: User) {
    const payload = { id: user.id, email: user.email };
    const token = await this.jwt.signAsync(payload);
    return token;
  }

  async validateUser(payload: JwtPayload): Promise<User | null> {
    const { id } = payload;
    if (!id) return null;
    return await this.repository.findUnique({ where: { id } });
  }
}
