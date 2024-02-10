import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class GetUsersDto {
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsPositive()
  take: number = 100;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  skip: number = 0;
}
