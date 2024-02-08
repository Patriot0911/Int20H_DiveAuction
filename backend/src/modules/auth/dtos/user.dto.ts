import { Expose } from 'class-transformer';

export class UserSerializationDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  name: string;

  @Expose()
  photo: string;

  @Expose()
  verified: boolean;
}
