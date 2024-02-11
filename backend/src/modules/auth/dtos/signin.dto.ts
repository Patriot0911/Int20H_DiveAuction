import { IsEmail, IsString, Length, MaxLength } from 'class-validator';

export class SigninDto {
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @Length(8, 32)
  password: string;
}
