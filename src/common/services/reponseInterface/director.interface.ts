import { Movie } from './movie.interface';

export interface Director {
  id: number;

  firstName: string;

  lastName: string;

  movies: Movie[];
}
