import { Injectable } from '@nestjs/common';
import type { PrismaService } from '../prisma/prisma.service.js';
import type { RegisterRequest } from './dto/register.dto.js';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async register(dto: RegisterRequest) {
    const { email, name, password } = dto

    
  }
}
