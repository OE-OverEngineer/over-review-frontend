import { CreateUserRequest, LoginRequset } from '../postSchemas';
import { post } from '../RestClient';

export default function authController() {
  return {
    postLogin: (data: LoginRequset) => post<LoginRequset, any>('auth/login', data),
    postRegister: (data: CreateUserRequest) =>
      post<CreateUserRequest, { access_token: string }>('auth/register', data),
  };
}
