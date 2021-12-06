import { CreateAdminUserRequest } from '../postSchemas';
import { ReviewPaginate } from '../reponseInterface/review.interface';
import { User } from '../reponseInterface/user.interface';
import { get, post } from '../RestClient';

export default function userController() {
  return {
    postUsers: (data: CreateAdminUserRequest) =>
      post<CreateAdminUserRequest, User>('users', data),
    getUsers: () => get<User[]>('users'),
    getUsersProfile: () => get<User>('users/profile'),
    getUsersIdReviews: (
      usrid: number | string,
      perPage: number,
      pageNum: number,
      sortBy?: string,
    ) =>
      get<ReviewPaginate>(
        `users/${usrid}/reviews?perPage=${perPage}&pageNum=${pageNum}&sortBy=${sortBy}`,
      ),
    getTopReview: (amount: number) => get<User[]>(`users/top-review?amount=${amount}`),
  };
}
