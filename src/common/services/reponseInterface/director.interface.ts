import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Movie } from './movie.entity';

export interface Director {
  id: number;

  firstName: string;

  lastName: string;

  movies: Movie[];
}
