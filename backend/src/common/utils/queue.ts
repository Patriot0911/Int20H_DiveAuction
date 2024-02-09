import { BadRequestException } from '@nestjs/common';

interface Task {
  [key: string]: any;
}
type Job = () => Promise<unknown>;
type Handler = (task: Task) => Promise<unknown>;

interface Options {
  handler: Handler;
  concurrency: number;
  timeout?: number;
}

export class Queue {
  private readonly waiting: Job[] = [];
  private readonly handler: Handler;
  private readonly timeout: number;
  private readonly concurrency: number;
  private count = 0;

  constructor(options: Options) {
    this.timeout = options.timeout ?? Infinity;
    this.handler = options.handler;
    this.concurrency = options.concurrency;
  }

  private next(): void {
    const emptyChannels = this.concurrency - this.count;
    let launchCount = Math.min(emptyChannels, this.waiting.length);
    while (launchCount-- > 0) {
      this.count++;
      const job = this.waiting.shift();
      job().finally(() => {
        this.count--;
        if (this.waiting.length > 0) setTimeout(() => this.next(), 0);
      });
    }
  }

  exec(task: Task): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let expired = false;
      const timer = setTimeout(() => {
        expired = true;
        reject(
          new BadRequestException('Server responds too long. Try again later'),
        );
      }, this.timeout);
      this.waiting.push(() => {
        if (expired) Promise.resolve();
        clearTimeout(timer);
        return this.handler(task).then(resolve, reject);
      });
      const hasChannel = this.count < this.concurrency;
      if (hasChannel) this.next();
    });
  }
}
