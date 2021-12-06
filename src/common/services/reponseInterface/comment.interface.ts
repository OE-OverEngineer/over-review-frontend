import { Review } from './review.interface';
import { User } from './user.interface';

export interface Comment {
  id: number;
  user: User;
  message: string;
  replies: {
    byUser: User;
    id: number;
    message: string;
  }[];
}
