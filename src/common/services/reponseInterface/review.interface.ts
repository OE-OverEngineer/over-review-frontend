import { Movie } from './movie.interface';
import { User } from './user.interface';

export interface Review {
  id?: number;

  user: User;

  message: string;

  score: number;

  movie: Movie;

  comments?: Comment[];
}
