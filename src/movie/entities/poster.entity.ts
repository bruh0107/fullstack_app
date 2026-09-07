import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn, type Relation,
} from 'typeorm';
import { MovieEntity } from './movie.entity.js';

@Entity({ name: 'movie-posters' })
export class MoviePosterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  url: string;

  @OneToOne(() => MovieEntity, (movie) => movie.poster)
  movie: Relation<MovieEntity>;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;
}
