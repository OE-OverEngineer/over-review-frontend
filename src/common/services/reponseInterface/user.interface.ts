import { Movie } from './movie.interface';
import { Report } from './report.interface';
import { Review } from './review.interface';
import { Role } from './role.interface';

export interface User {
  id: number;

  role: Role;

  email: string;

  password?: string;

  firstName: string;

  lastName: string;

  displayName: string;

  avatar: string;

  dateOfBirth: Date;

  gender: 'Male' | 'Female';

  banned: boolean;

  movieRequest: Movie[];

  reports: Report[];

  reported: Report[];

  reviews: Review[];

  comments: Comment[];
}
