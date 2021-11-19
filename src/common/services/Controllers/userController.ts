import { CreateUserRequest, LoginRequset } from '../postSchemas';
import { get, post } from '../RestClient';

export default function userController() {
  return {
    postUsers: (data: CreateUserRequest) => post('users', data),
    getUsers: () => get('users'),
    getUsersProfile: () => get('users/profile'),
    postAuth: (data: LoginRequset) =>
      post<LoginRequset, { access_token: string }>('auth/login', data),
  };
}
