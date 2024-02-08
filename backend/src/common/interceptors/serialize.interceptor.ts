import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClassConstructor, plainToInstance } from 'class-transformer';

interface Options {
  nested?: string;
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(
    private readonly dto: ClassConstructor<any>,
    private readonly options: Options = {},
  ) {}

  private serialize(data: { [key: string]: any }) {
    const { nested } = this.options;
    const sub = nested ? data[nested] : data;
    if (!sub)
      throw new Error(
        `Cannot serialize ${nested ? `${nested} of ${sub}` : sub}`,
      );
    const res = plainToInstance(this.dto, sub, {
      excludeExtraneousValues: true,
    });
    return nested ? { ...data, [nested]: res } : res;
  }

  intercept(_: ExecutionContext, handler: CallHandler<any>): Observable<any> {
    return handler
      .handle()
      .pipe(
        map((data: { [key: string]: any }) =>
          Array.isArray(data)
            ? data.map((item) => this.serialize(item))
            : this.serialize(data),
        ),
      );
  }
}

export const Serialize = (dto: ClassConstructor<any>, options?: Options) =>
  UseInterceptors(new SerializeInterceptor(dto, options));
