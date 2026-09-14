import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GetJwtConfig } from '../config/jwt.config.js';

@Module({
  imports: [JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: GetJwtConfig,
    inject: [ConfigService]
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
