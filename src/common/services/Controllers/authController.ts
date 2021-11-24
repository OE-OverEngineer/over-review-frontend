import { CreateUserRequest, LoginRequset } from '../postSchemas';
import { User } from '../reponseInterface/user.interface';
import { post } from '../RestClient';

export default function authController() {
  return {
    postLogin: (data: LoginRequset) =>
      post<LoginRequset, { access_token: string; role?: string }>('auth/login', data),
    postRegister: (data: CreateUserRequest) =>
      post<CreateUserRequest, User>('auth/register', data),
  };
}