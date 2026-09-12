import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Nest Course Api')
    .setDescription('Api documentation for nest js course')
    .setVersion('1.0.0')
    .setContact('Nastya', 'https://github.com/bruh0107', 'anastasion0107@gmail.com')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/docs', app, document, {
    jsonDocumentUrl: '/swagger.json',
    yamlDocumentUrl: '/swagger.yaml',
    customSiteTitle: 'nest js title'
  });

  await app.listen(3000);
}
await bootstrap();
