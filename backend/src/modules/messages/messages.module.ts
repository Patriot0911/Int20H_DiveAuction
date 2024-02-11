import { Global, Module } from '@nestjs/common';
import { MessagesService } from './services/messages.service';

@Global()
@Module({
  providers: [MessagesService],
  exports: [MessagesService],
})
export class MessagesModule {}
