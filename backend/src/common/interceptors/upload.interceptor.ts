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
import type { MultipartFile } from '@fastify/multipart';
import type { FastifyRequest } from 'fastify';

interface Options {
  dir: string;
  mimeTypes: string[];
  maxUploadedFiles: number;
  uploadTimeout?: number;
  uploadedField?: string;
  mkdir?: boolean;
}

const NOOP = () => {};
const UPLOAD_DIR = join(process.cwd(), '/public/uploaded');
const UPLOAD_TIMEOUT = 5000;
const UPLOADED_FIELD = 'uploaded';
const MAX_FILENAME_LENGTH = 50;

export class UploadInterceptor implements NestInterceptor {
  private readonly dirPath: string;
  private readonly mimeTypes: string[];
  private readonly maxUploadedFiles: number;
  private readonly uploadTimeout: number;
  private readonly uploadedField: string;
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
    this.files = [];
  }

  normalizeFilename(filename: string): string {
    const length = Math.min(filename.lastIndexOf('.'), MAX_FILENAME_LENGTH);
    const normalized = filename
      .slice(0, length)
      .replace(/[^a-z0-9.]/gi, '_')
      .toLowerCase();
    return `${this.index++}-${normalized}${extname(filename)}`;
  }

  async upload(part: MultipartFile): Promise<void> {
    const { mimetype, filename } = part;
    if (!this.mimeTypes.includes(mimetype))
      throw new BadRequestException(
        `Invalid file type ${mimetype} of ${filename}`,
      );
    const normalized = this.normalizeFilename(filename);
    const filePath = join(this.dirPath, normalized);
    try {
      await pipeline(part.file, fs.createWriteStream(filePath), {
        signal: AbortSignal.timeout(this.uploadTimeout ?? UPLOAD_TIMEOUT),
      });
      this.files.push(filePath);
    } catch (err) {
      throw new BadRequestException(
        err.name === 'AbortError'
          ? `Exceeded upload timeout of ${filename}`
          : `Failed to upload ${filename}`,
      );
    }
  }

  async process(req: FastifyRequest) {
    req.body = {} as { [key: string]: unknown };
    const parts = req.parts();
    let uploadedFiles = 0;
    for await (const part of parts) {
      if (part.type === 'file') {
        if (++uploadedFiles > this.maxUploadedFiles)
          throw new BadRequestException(`Exceeded max uploaded files limit`);
        else await this.upload(part);
        continue;
      }
      try {
        req.body[part.fieldname] = JSON.parse(part.value as any);
      } catch (err) {
        throw new BadRequestException(
          `Invalid format of ${part.fieldname}. Expected JSON`,
        );
      }
    }
    req.body[this.uploadedField] = this.files;
  }

  async intercept(
    ctx: ExecutionContext,
    handler: CallHandler<any>,
  ): Promise<Observable<any>> {
    const req = ctx.switchToHttp().getRequest();
    try {
      await this.process(req);
      this.files = [];
    } catch (err) {
      Promise.all(this.files.map((file) => fs.promises.unlink(file))).catch(
        NOOP,
      );
      this.files = [];
      throw err;
    }
    return handler.handle();
  }
}

export const Upload = (options: Options) =>
  UseInterceptors(new UploadInterceptor(options));
