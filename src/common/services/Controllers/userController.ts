import { CreateUserRequest, LoginRequset } from '../postSchemas';
import { get, post } from '../RestClient';

export default function userController(): unknown {
  return {
    postUsers: (data: CreateUserRequest) => post('users', data),
    getUsers: () => get('users'),
    getUsersProfile: () => get('users/profile'),
    postAuth: (data: LoginRequset) => post('auth/login', data),
  };
}
