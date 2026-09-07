import { Module } from '@nestjs/common';
import { ActorService } from './actor.service.js';
import { ActorController } from './actor.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from '../movie/entities/movie.entity.js';
import { ActorEntity } from './entities/actor.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([ActorEntity])],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}
