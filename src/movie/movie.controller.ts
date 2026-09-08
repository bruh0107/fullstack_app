import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { MovieService } from './movie.service.js';
import { MovieDto } from './dto/movie.dto.js';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  // @Get()
  // findAll() {
  //   return this.movieService.findAll();
  // }
  //
  // @Get(':id')
  // findById(@Param('id') id: string) {
  //   return this.movieService.findById(id);
  // }
  //
  // @Post()
  // create(@Body() dto: MovieDto) {
  //   return this.movieService.create(dto);
  // }
  //
  // @Put(':id')
  // update(@Param('id') id: string, @Body() dto: MovieDto) {
  //   return this.movieService.update(id, dto);
  // }
  //
  // @Patch(':id')
  // patchUpdate(@Param('id') id: string, @Body() dto: Partial<MovieDto>) {
  //   return this.movieService.patchUpdate(id, dto);
  // }
  //
  // @Delete(':id')
  // delete(@Param('id') id: string) {
  //   return this.movieService.delete(id);
  // }
}
