import { IsEmail, IsString, Length, MaxLength } from 'class-validator';

export class SignupDto {
  @IsString()
  @Length(3, 50)
  name: string;

  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @Length(8, 32)
  password: string;
}
