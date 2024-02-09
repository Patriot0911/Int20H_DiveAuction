import {
  AuctionImage,
  AuctionStatus,
  Category,
  Favorite,
  Message,
  User,
} from '@prisma/client';
import { Expose } from 'class-transformer';

export class CreateAuctionDto {
  @Expose()
  userId: number;

  @Expose()
  categoryId: number;

  @Expose()
  startPrice: number;

  @Expose()
  status: AuctionStatus;

  @Expose()
  startDate: Date;

  @Expose()
  endDate: Date;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  user: User;

  @Expose()
  catagory: Category;

  @Expose()
  auctionImages: AuctionImage[];

  @Expose()
  favorities: Favorite[];

  @Expose()
  messages: Message[];
}
