import { BaseResponse } from '../RestClient';

import { Movie } from './movie.interface';
import { User } from './user.interface';

export interface Review extends BaseResponse {
  comments: Comment[];
  id?: number;
  likes: string;
  likesCount: number;
  message: string;
  score: number;
  user: User;
  movie: Movie;
}

export interface ProfileReview extends Review {
  movie: Movie;
}

export interface ReviewPaginate {
  data: Review[];
  total: number;
}
