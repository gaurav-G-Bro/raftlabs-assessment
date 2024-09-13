import { IsEmail, IsNotEmpty, IsString, MinLength, IsMobilePhone } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsMobilePhone()
  mobileNumber: string;

  @IsNotEmpty()
  age: number;
}

