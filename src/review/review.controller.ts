import { Body, Controller, Post } from '@nestjs/common';
import { ReviewService } from './review.service.js';
import { MovieDto } from '../movie/dto/movie.dto.js';
import { CreateReviewDto } from './dto/create-review.dto.js';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }
}
