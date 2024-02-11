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

  @IsOptional()
  @IsDate()
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
