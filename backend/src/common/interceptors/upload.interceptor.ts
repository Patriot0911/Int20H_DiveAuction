import * as fs from 'node:fs';
import { join, extname } from 'node:path';
import { pipeline } from 'node:stream/promises';
import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import type { MultipartFile, MultipartFields } from '@fastify/multipart';

interface Options {
  dir: string;
  mimeTypes: string[];
  maxUploadedFiles: number;
  uploadTimeout?: number;
  uploadedField?: string;
  mkdir?: boolean;
}

const UPLOAD_DIR = join(process.cwd(), '/public/uploaded');
const UPLOAD_TIMEOUT = 5000;
const UPLOADED_FIELD = 'uploaded';

export class UploadInterceptor implements NestInterceptor {
  private readonly dirPath: string;
  private readonly mimeTypes: string[];
  private readonly maxUploadedFiles: number;
  private readonly uploadTimeout: number;
  private readonly uploadedField: string;
  private readonly errors: Set<string>;
  private index: number = 0;
  private files: string[];

  constructor(options: Options) {
    const dirPath = join(UPLOAD_DIR, options.dir);
    try {
      this.index = fs.readdirSync(dirPath).length;
    } catch (err) {
      if (err.code === 'ENOENT' && options.mkdir)
        fs.mkdirSync(dirPath, { recursive: true });
      else throw err;
    }
    this.mimeTypes = options.mimeTypes;
    this.maxUploadedFiles = options.maxUploadedFiles;
    this.uploadTimeout = options.uploadTimeout ?? UPLOAD_TIMEOUT;
    this.uploadedField = options.uploadedField ?? UPLOADED_FIELD;
    this.dirPath = dirPath;
    this.errors = new Set();
    this.files = [];
  }

  async upload(part: MultipartFile): Promise<void> {
    if (!this.mimeTypes.includes(part.mimetype))
      return void this.errors.add(
        `Invalid file type ${part.mimetype} of ${part.filename}`,
      );
    const ext = extname(part.filename);
    const filePath = join(this.dirPath, `${this.index++}${ext}`);
    try {
      await pipeline(part.file, fs.createWriteStream(filePath), {
        signal: AbortSignal.timeout(this.uploadTimeout ?? UPLOAD_TIMEOUT),
      });
      this.files.push(filePath);
    } catch (err) {
      if (err.name === 'AbortError')
        this.errors.add(`Exceeded upload timeout of ${part.filename}`);
      else this.errors.add(`Failed to upload ${part.filename}`);
    }
  }

  async intercept(
    ctx: ExecutionContext,
    handler: CallHandler<any>,
  ): Promise<Observable<any>> {
    const req = ctx.switchToHttp().getRequest();
    const parts: (MultipartFile & MultipartFields)[] = req.parts();
    req.body = {} as { [key: string]: unknown };
    let uploadedFiles = 0;
    for await (const part of parts) {
      if (part.file) {
        if (++uploadedFiles > this.maxUploadedFiles)
          this.errors.add(`Exceeded max uploaded files limit`);
        else await this.upload(part);
        continue;
      }
      try {
        req.body[part.fieldname] = JSON.parse(part.value as any);
      } catch (err) {
        this.errors.add(`Invalid format of ${part.fieldname}. Expected JSON`);
      }
    }
    req.body[this.uploadedField] = this.files;
    this.files = [];
    if (this.errors.size) {
      const error = new BadRequestException([...this.errors].join('\n'));
      this.errors.clear();
      throw error;
    }
    return handler.handle();
  }
}

export const Upload = (options?: Options) =>
  UseInterceptors(new UploadInterceptor(options));
