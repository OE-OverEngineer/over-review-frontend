import { Movie } from './movie.interface';

export interface Category {
  id: number;

  title: string;

  movies: Movie[];
}
