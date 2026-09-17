import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
  @ApiProperty({
    description: 'Адрес электронной почты',
    example: 'example@gmail.com',
  })
  @IsString({ message: 'Почта должно быть строкой' })
  @IsNotEmpty({ message: 'Почта обязательно для заполнения' })
  @IsEmail({}, { message: 'Некорректный формат почты' })
  email: string;

  @ApiProperty({
    description: 'Пароль от аккаунта',
    example: 'QWEasd123',
    minLength: 6,
    maxLength: 128,
  })
  @IsString({ message: 'Пароль должно быть строкой' })
  @IsNotEmpty({ message: 'Пароль обязательно для заполнения' })
  @MinLength(6, { message: 'Пароль должен содержать не менее 6 символов' })
  @MaxLength(128, { message: 'Пароль не должен содержать больше 128 символов' })
  password: string;
}