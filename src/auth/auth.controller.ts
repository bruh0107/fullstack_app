import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterRequest } from './dto/register.dto.js';
import { LoginRequest } from './dto/login.dto.js';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: RegisterRequest,
  ) {
    return await this.authService.register(res, dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: LoginRequest,
  ) {
    return await this.authService.login(res, dto);
  }
}
