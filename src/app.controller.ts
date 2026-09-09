import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service.js';
import { StringToLowercasePipe } from './common/pipes/string-to-lowercase.pipe.js';
import { AuthGuard } from './common/guards/auth.guard.js';
import { UserAgent } from './common/decorators/user-agent.decorator.js';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UsePipes(StringToLowercasePipe)
  @Post()
  create(@Body('title') title: string) {
    return `Movie: ${title}`
  }

  @UseGuards(AuthGuard)
  @Get('@me')
  getProfile(@UserAgent() userAgent: string) {
    return {
      id: 1,
      username: 'lol',
      email: 'main@,sdk.com',
      userAgent,
    };
  }
}
