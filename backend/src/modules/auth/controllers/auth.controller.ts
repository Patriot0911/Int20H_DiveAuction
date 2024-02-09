import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ConfigService } from '@nestjs/config';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { AuthGuard } from '@nestjs/passport';
import { Authorized } from 'src/common/guards/auth.guard';
import { SignupDto } from '../dtos/signup.dto';
import { SigninDto } from '../dtos/signin.dto';
import { UserSerializationDto } from '../dtos/user.dto';
import type { Profile } from '../interfaces/profile.interface';
import type { FastifyReply } from 'fastify';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly service: AuthService,
    private readonly config: ConfigService,
  ) {}

  @Post('/signup')
  @HttpCode(200)
  async signup(@Body() body: SignupDto) {
    const { name, email, password } = body;
    await this.service.register(name, email, password);
  }

  @Post('/signin')
  @HttpCode(200)
  @Serialize(UserSerializationDto, { nested: 'user' })
  async signin(@Body() body: SigninDto) {
    const { email, password } = body;
    const user = await this.service.authenticate(email, password);
    const token = await this.service.issueToken(user);
    if (!user) throw new BadRequestException('Invalid email or password');
    return { token, user };
  }

  @Post('/logout')
  @HttpCode(200)
  @Authorized()
  async logout() {}

  @Get('/oauth/google')
  @UseGuards(AuthGuard('google'))
  googleOAuth(): void {}

  @Get('/callback/google')
  @UseGuards(AuthGuard('google'))
  async googleOAuthCb(@Req() req: { user: Profile }, @Res() res: FastifyReply) {
    const user = await this.service.useGoogleOAuth(req.user);
    await this.service.issueToken(user);
    res.redirect(302, this.config.get<string>('OAuth.redirectURL'));
  }
}
