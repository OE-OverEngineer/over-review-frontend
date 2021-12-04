import { BaseResponse } from '../RestClient';

export interface Category extends BaseResponse {
  id: number;
  title: string;
}
