import { IsEmail, IsEnum, IsString } from "class-validator";
import { Gender } from "../../enum";

export class CreateUserDto {
  @IsString()
  lastName: string;

  @IsString()
  firstName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  bithdate: string;
}
