import * as fs from 'node:fs';
import { randomBytes } from 'node:crypto';
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
const UNIQUE_HASH_LENGTH = 5;
const UPLOADED_FIELD = 'uploaded';

export class UploadInterceptor implements NestInterceptor {
  private readonly dirPath: string;
  private readonly mimeTypes: string[];
  private readonly maxUploadedFiles: number;
  private readonly uploadTimeout: number;
  private readonly uploadedField: string;

  constructor(options: Options) {
    const dirPath = join(UPLOAD_DIR, options.dir);
    try {
      fs.accessSync(dirPath, fs.constants.W_OK);
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
  }

  async upload(
    part: MultipartFile,
    hash: string,
    files: string[],
  ): Promise<void> {
    const { mimetype, filename } = part;
    if (!this.mimeTypes.includes(mimetype))
      throw new BadRequestException(
        `Invalid file type ${mimetype} of ${filename}`,
      );
    const ext = extname(filename);
    const filePath = join(
      this.dirPath,
      `${Date.now()}-${files.length}-${hash}${ext}`,
    );
    try {
      await pipeline(part.file, fs.createWriteStream(filePath), {
        signal: AbortSignal.timeout(this.uploadTimeout),
      });
      files.push(filePath);
    } catch (err) {
      throw new BadRequestException(
        err.name === 'AbortError'
          ? `Exceeded upload timeout of ${filename}`
          : `Failed to upload ${filename}`,
      );
    }
  }

  async process(req: FastifyRequest, hash: string, files: string[]) {
    req.body = {} as { [key: string]: unknown };
    const parts = req.parts();
    let uploadedFiles = 0;
    for await (const part of parts) {
      if (part.type === 'file') {
        if (++uploadedFiles > this.maxUploadedFiles)
          throw new BadRequestException(`Exceeded max uploaded files limit`);
        else await this.upload(part, hash, files);
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
    req.body[this.uploadedField] = files;
  }

  async intercept(
    ctx: ExecutionContext,
    handler: CallHandler<any>,
  ): Promise<Observable<any>> {
    const req = ctx.switchToHttp().getRequest();
    const hash = randomBytes(UNIQUE_HASH_LENGTH).toString('hex');
    const files = [];
    try {
      await this.process(req, hash, files);
    } catch (err) {
      Promise.all(files.map((file) => fs.promises.unlink(file))).catch(NOOP);
      throw err;
    }
    return handler.handle();
  }
}

export const Upload = (options: Options) =>
  UseInterceptors(new UploadInterceptor(options));
