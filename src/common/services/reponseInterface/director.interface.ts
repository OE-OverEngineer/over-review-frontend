import { BaseResponse } from '../RestClient';

export interface Director extends BaseResponse {
  id: number;
  firstName: string;
  lastName: string;
}
