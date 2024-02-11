import { Global } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { WebSocketServer } from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { MessagesService } from './modules/messages/services/messages.service';
import { AuthService } from './modules/auth/services/auth.service';
import type { Server, Socket } from 'socket.io';
import { User } from '@prisma/client';

export enum Events {
  NEW_BID = 'new-bid',
  NEW_MESSAGE = 'new-message',
}

const PORT = parseInt(process.env.PORT!, 10);

@Global()
@WebSocketGateway(PORT)
export class AppGateway {
  @WebSocketServer() private readonly server: Server;
  private users = new Map<string, User>();

  constructor(
    private readonly msg: MessagesService,
    private readonly jwt: JwtService,
    private readonly auth: AuthService,
  ) {}

  async handleConnection(@ConnectedSocket() client: Socket) {
    const [, token] = client.handshake.headers.authorization?.split(' ') ?? [];
    if (!token) return;
    try {
      const payload = await this.jwt.verifyAsync(token);
      const user = await this.auth.validateUser(payload);
      if (user) this.users.set(client.id, user);
    } catch (err) {
      // NOOP
    }
  }

  @SubscribeMessage(Events.NEW_MESSAGE)
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: string,
  ) {
    const data = JSON.parse(payload) as { auctionId: number; content: string };
    const user = this.users.get(client.id);
    if (!user) return;
    await this.msg.create(data.auctionId, user.id, data.content);
    this.emit(Events.NEW_MESSAGE, {
      auctionId: data.auctionId,
      content: data.content,
      user: Object.assign({}, user, { password: undefined }),
    });
  }

  emit(event: Events, data: { [key: string]: any }) {
    this.server.emit(event, data);
  }
}
