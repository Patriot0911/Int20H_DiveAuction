import { Global } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';
import { WebSocketServer } from '@nestjs/websockets';
import type { Server } from 'socket.io';

export enum Events {
  NEW_BID = 'new-bid',
  NEW_MESSAGE = 'new-message',
}

@Global()
@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['*'],
    allowedHeaders: ['*'],
    credentials: true,
  },
})
export class AppGateway {
  @WebSocketServer() private readonly server: Server;

  constructor() {}

  emit(event: Events, data: { [key: string]: any }) {
    this.server.emit(event, data);
  }
}
