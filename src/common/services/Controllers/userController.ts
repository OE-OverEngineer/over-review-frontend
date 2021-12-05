import { CreateUserRequest } from '../postSchemas';
import { User } from '../reponseInterface/user.interface';
import { get, post } from '../RestClient';

export default function userController() {
  return {
    postUsers: (data: CreateUserRequest) => post<CreateUserRequest, User>('users', data),
    getUsers: () => get('users'),
    getUsersProfile: () => get('users/profile'),
    getUsersIdReviews: (
      usrid: string,
      perPage: number,
      pageNum: number,
      sortBy?: string,
    ) =>
      get(
        `users/${usrid}/reviews?perPage=${perPage}&pageNum=${pageNum}&sortBy=${sortBy}`,
      ),
    getTopReview: (amount: number) => get<User[]>(`users/top-review?amount=${amount}`),
  };
}
