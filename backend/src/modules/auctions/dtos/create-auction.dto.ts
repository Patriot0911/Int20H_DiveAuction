import { Transform } from 'class-transformer';
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
import { ValidatePlannedDates } from './update-auction.dto';

export class CreateAuctionDto {
  @IsString()
  @Length(3, 50)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description: string;

  @IsNumber()
  @IsPositive()
  startPrice: number;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  startDate: Date;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  endDate: Date;

  @IsNumber()
  @IsPositive()
  categoryId: number;

  @IsOptional()
  uploaded: string[];

  @Validate(ValidatePlannedDates)
  plannedDates() {
    return { startDate: this.startDate, endDate: this.endDate };
  }
}