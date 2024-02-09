import { Expose } from 'class-transformer';

export class BidsDto {
  @Expose()
  id: number;

  @Expose()
  user: string;

  @Expose()
  price: number;

  @Expose()
  createdAt: Date;
}
