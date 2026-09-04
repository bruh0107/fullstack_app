import {
  IS_UUID,
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString({ message: 'Название должно быть строкой' })
  @IsNotEmpty({ message: 'Название не должно быть пустым' })
  @Length(2, 40, { message: 'Название должно быть от 2 до 40 символов' })
  title: string;

  @IsOptional()
  @IsString({ message: 'Описание должно быть строкой' })
  description: string;

  @IsOptional()
  @IsPositive({ message: 'Приоритет должен быть положительным числом' })
  @IsInt({ message: 'Приоритет должен быть целым числом' })
  priority: number;

  @IsOptional()
  @IsArray({ message: 'Теги должны быть массивом' })
  @IsEnum(TaskTag, { each: true, message: 'Недопустимое значение тега' })
  tags: TaskTag[];
}
