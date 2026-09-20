import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { SendMessageDto } from './dto/send-message.dto.js';

@Injectable()
export class ChatService {
  constructor(private readonly prismaService: PrismaService) {}

  async sendMessage(dto: SendMessageDto) {
    const { text } = dto;

    return await this.prismaService.messages.create({
      data: {
        text,
      },
    });
  }
}
