import { Review } from './review.interface';
import { User } from './user.interface';

export interface Comment {
  id: number;

  user: User;

  review: Review;

  message: string;

  //
  // movie: Movie;
}
