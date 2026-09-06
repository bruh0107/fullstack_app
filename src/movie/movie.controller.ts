import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Headers,
  Param,
} from '@nestjs/common';
import { MovieService } from './movie.service.js';
import { CreateMovieDto } from './dto/create-movie.dto.js';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Post()
  create(@Body() dto: CreateMovieDto) {
    return this.movieService.create(dto);
  }
}
