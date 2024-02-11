import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class GetAuctionsDto {
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @IsPositive()
  categoryId: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @IsPositive()
  ownerId: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsPositive()
  take: number = 100;

  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  skip: number = 0;

  @IsOptional()
  @IsString()
  @IsEnum([
    'id',
    'startDate',
    'endDate',
    'startPrice',
    'endPrice',
    'title',
    'createdAt',
  ])
  orderBy: string = 'id';

  @IsOptional()
  @IsEnum(['asc', 'desc'])
  order: 'asc' | 'desc' = 'asc';

  @IsOptional()
  @IsString()
  @IsEnum(['active', 'finished', 'planned'])
  status: string;

  @IsOptional()
  @IsString()
  title: string;
}
