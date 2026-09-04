import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'Название должно быть строкой' })
  @IsNotEmpty({ message: 'Название не должно быть пустым' })
  @Length(2, 40, { message: 'Название должно быть от 2 до 40 символов' })
  title: string;

  @IsOptional()
  @IsString({ message: 'Описание должно быть строкой' })
  description: string
}
