import { BaseResponse } from '../RestClient';

import { Movie } from './movie.interface';
import { Report } from './report.interface';
import { Review } from './review.interface';
import { Role } from './role.interface';

export interface User extends BaseResponse {
  id: number;
  amountReviews: number;
  role: Role;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatarUrl: string;
  dateOfBirth: Date;
  gender: 'Male' | 'Female';
  banned: boolean;
  movieRequest: Movie[];
  reports: Report[];
  reported: Report[];
  reviews: Review[];
  comments: Comment[];
}
