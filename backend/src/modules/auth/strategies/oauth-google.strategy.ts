import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import type { Profile } from '../interfaces/profile.interface';

@Injectable()
export class OAuthGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(config: ConfigService) {
    super({
      ...config.get('OAuth.google'),
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string | undefined,
    payload: { [key: string]: any },
  ): Promise<Profile> {
    const { displayName, emails, photos } = payload;
    return {
      email: emails[0],
      displayName: displayName,
      photo: photos[0].value,
    };
  }
}
