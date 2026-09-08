import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateActorDto } from './dto/create-actor.dto';
import { Actor } from '@prisma/client';

@Injectable()
export class ActorService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateActorDto): Promise<Actor> {
    const { name } = dto;

    return await this.prismaService.actor.create({
      data: {
        name,
      },
    });
  }
}
