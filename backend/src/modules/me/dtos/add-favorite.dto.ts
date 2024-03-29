import { IsNumber, IsPositive } from 'class-validator';

export class AddFavoriteDto {
  @IsNumber()
  @IsPositive()
  auctionId: number;
}
