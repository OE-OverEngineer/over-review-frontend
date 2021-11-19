import { Director } from './director.interface';
import { User } from './user.interface';

export interface Report {
  id: number;

  director: Director;

  targetUser: User;

  byUser: User;
}
