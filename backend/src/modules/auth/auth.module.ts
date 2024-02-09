import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { OAuthGoogleStrategy } from './strategies/oauth-google.strategy';

@Module({
  providers: [AuthService, OAuthGoogleStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
