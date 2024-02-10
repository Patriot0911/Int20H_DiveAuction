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
  ValidatorConstraint,
} from 'class-validator';

@ValidatorConstraint({ name: 'PlannedDates', async: false })
export class ValidatePlannedDates {
  validate(_: Date, args: any) {
    const { startDate, endDate } = args.object;
    if (!startDate && !endDate) return true;
    return endDate > startDate && startDate > new Date();
  }

  defaultMessage() {
    return 'Start date should be in the future and less than end date';
  }
}

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
  @Transform(({ value }) => new Date(value))
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
