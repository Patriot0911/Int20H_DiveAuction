import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

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
    profile: any,
  ) {
    const { displayName, emails, photos } = profile;
    return {
      email: emails[0],
      displayName: displayName,
      photo: photos[0].value,
    };
  }
}
