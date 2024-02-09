import { WebSocketGateway } from '@nestjs/websockets';
import { WebSocketServer } from '@nestjs/websockets';
import type { Server } from 'socket.io';

export enum Events {
  NEW_BID = 'new-bid',
}

const PORT = parseInt(process.env.PORT!, 10);
const WS_GATEWAY_PATH = process.env.WS_GATEWAY_PATH ?? '/';

@WebSocketGateway(PORT, { path: WS_GATEWAY_PATH })
export class AppGateway {
  @WebSocketServer() private readonly server: Server;

  emit(event: Events, data: { [key: string]: unknown }) {
    this.server.emit(event, data);
  }
}
