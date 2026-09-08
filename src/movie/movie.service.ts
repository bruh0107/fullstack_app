import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Movie } from '@prisma/client';
import { MovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.movie.findMany({
      where: {
        isAvailable: true
      },
      orderBy: {
        createdAt: 'desc'
      },
    })
  }

  async findById(id: string): Promise<Movie> {
    const movie = await this.prismaService.movie.findUnique({
      where: {
        id,
      },
      include: {
        actors: true,
        poster: true,
        reviews: true
      }
    });

    if (!movie || !movie.isAvailable) throw new NotFoundException('Фильм не найден');

    return movie;
  }

  async create(dto: MovieDto): Promise<Movie> {
    const { title, releaseYear, actorIds, imageUrl } = dto;

    const actors = await this.prismaService.actor.findMany({
      where: {
        id: { in: actorIds },
      },
    });

    if (!actors || !actors.length)
      throw new NotFoundException('Актеры не найдены');

    return this.prismaService.movie.create({
      data: {
        title,
        releaseYear,
        poster: imageUrl
          ? {
              create: {
                url: imageUrl,
              },
            }
          : undefined,
        actors: {
          connect: actors.map((actor) => ({
            id: actor.id,
          })),
        },
      },
    });
  }

  async update(id: string, dto: Partial<MovieDto>): Promise<boolean> {
    const movie = await this.findById(id);
    const { title, releaseYear, actorIds, imageUrl } = dto;

    const actors = await this.prismaService.actor.findMany({
      where: {
        id: { in: actorIds },
      },
    });

    await this.prismaService.movie.update({
      where: {
        id: movie.id,
      },
      data: {
        title,
        releaseYear,
        poster: imageUrl
          ? {
              create: {
                url: imageUrl,
              },
            }
          : undefined,
        actors: {
          connect: actors.map((actor) => ({
            id: actor.id,
          })),
        },
      },
    });

    return true;
  }

  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);

    await this.prismaService.movie.delete({
      where: { id },
    });

    return movie.id;
  }
}
