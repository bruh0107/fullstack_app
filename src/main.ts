import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './common/middlewares/logger.middleware.js';
import { ResponseInterceptor } from './common/interceptors/response.interceptor.js';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api')
  app.useGlobalFilters(new AllExceptionsFilter())


  app.use(LoggerMiddleware)
  app.useGlobalInterceptors(new ResponseInterceptor())

  await app.listen(3000);
}
await bootstrap();
