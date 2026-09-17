import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Nest Course Api')
    .setDescription('Api documentation for nest js course')
    .setVersion('1.0.0')
    .setContact(
      'Nastya',
      'https://github.com/bruh0107',
      'anastasion0107@gmail.com',
    )
    .addBearerAuth()
    .build();
}