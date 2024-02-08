import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { AuthGuard } from '@nestjs/passport';
import { Authorized } from 'src/common/guards/auth.guard';
import { SignupDto } from '../dtos/signup.dto';
import { SigninDto } from '../dtos/signin.dto';
import { UserSerializationDto } from '../dtos/user.dto';
import type { FastifySessionObject } from '@fastify/session';
import type { Profile } from '../interfaces/profile.interface';
import type { FastifyReply } from 'fastify';
import { ConfigService } from '@nestjs/config';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly service: AuthService,
    private readonly config: ConfigService,
  ) {}

  @Post('/signup')
  @HttpCode(201)
  async signup(@Body() body: SignupDto) {
    const { name, email, password } = body;
    await this.service.register(name, email, password);
    return { status: 'signed up' };
  }

  @Post('/signin')
  @HttpCode(200)
  @Serialize(UserSerializationDto, { nested: 'user' })
  async signin(
    @Session() session: FastifySessionObject,
    @Body() body: SigninDto,
  ) {
    const { email, password } = body;
    const user = await this.service.authenticate(email, password);
    if (!user) throw new BadRequestException('Invalid email or password');
    this.service.startSession(session, user);
    return { status: 'signed in', user };
  }

  @Post('/logout')
  @HttpCode(200)
  @Authorized()
  async logout(@Session() session: FastifySessionObject) {
    await this.service.endSession(session);
    return { status: 'logged out' };
  }

  @Get('/oauth/google')
  @UseGuards(AuthGuard('google'))
  googleOAuth(): void {}

  @Get('/callback/google')
  @UseGuards(AuthGuard('google'))
  async googleOAuthCb(
    @Req() req: { user: Profile; session: FastifySessionObject },
    @Res() res: FastifyReply,
  ) {
    const user = await this.service.useGoogleOAuth(req.user);
    if (user) this.service.startSession(req.session, user);
    res.redirect(302, this.config.get<string>('OAuth.redirectURL'));
  }
}
