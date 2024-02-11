import {
  IsDate,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  MaxLength,
  Validate,
} from 'class-validator';
import { ValidatePlannedDates } from './planned-date-validator';
import { Transform } from 'class-transformer';

export class UpdateAuctionDto {
  @IsOptional()
  @IsString()
  @Length(3, 50)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  startPrice: number;

  @IsOptional()
  @IsDate()
  startDate: Date;

  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  endDate: Date;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  categoryId: number;

  @IsOptional()
  photos: Set<string>;

  @IsOptional()
  uploaded: string[];

  @Validate(ValidatePlannedDates)
  plannedDates() {
    return { startDate: this.startDate, endDate: this.endDate };
  }
}
