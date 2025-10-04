import {IsEmail, IsNotEmpty} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  username: string;
  @ApiProperty()
  @IsEmail()
  email: string;
}
