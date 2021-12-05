import { Actor } from './actor.interface';
import { Category } from './category.interface';
import { Director } from './director.interface';
import { Review } from './review.interface';
import { User } from './user.interface';

export interface Movie {
  id?: number;

  title: string;

  description: string;

  director: Director;

  actors: Actor[];

  categories: Category[];

  startDate: Date;

  bannerImageUrl: string;

  trailerLink: string;

  approve: boolean;

  requestByUser?: User;

  reviews?: Review[];

  score?: number;
}

export interface MoviePaginate {
  data: Movie[];
  total: number;
}
