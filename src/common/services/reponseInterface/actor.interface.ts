import { BaseResponse } from '../RestClient';

export interface Actor extends BaseResponse {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string | ArrayBuffer | null;
}
