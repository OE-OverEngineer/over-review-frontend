import { BaseResponse } from '../RestClient';

import { User } from './user.interface';

export interface Review extends BaseResponse {
  comments: Comment[];
  id?: 6;
  likes: string;
  likesCount: number;
  message: string;
  score: number;
  user: User;
}
