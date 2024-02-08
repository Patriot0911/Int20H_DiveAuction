import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { OAuthGoogleStrategy } from './strategies/oauth-google.strategy';

@Module({
  providers: [AuthService, OAuthGoogleStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
