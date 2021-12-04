/* eslint-disable no-underscore-dangle */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { API_URL, TOKEN_KEY } from 'common/utilities/constants';

export interface ErrorInterface {
  error: string;
  message: string[];
  statusCode: number;
}

export interface BaseResponse {
  createdAt: Date;
  updatedAt: Date;
}

export const http = axios.create({
  baseURL: API_URL,
});

export const post = <T, U>(
  endpoint: string,
  data?: T,
  config?: AxiosRequestConfig,
): Promise<U> =>
  new Promise((resolve, reject) =>
    http
      .post(endpoint, data, config)
      .then((res) => resolve(res.data))
      .catch((e) => reject(e.response?.data)),
  );

export const patch = <T>(endpoint: string, data?: T): Promise<AxiosResponse<T>> =>
  new Promise((resolve, reject) =>
    http
      .patch(endpoint, data)
      .then((res) => resolve(res.data))
      .catch((e) => reject(e.response?.data)),
  );

export const get = <T>(endpoint: string): Promise<T> =>
  new Promise((resolve, reject) =>
    http
      .get(endpoint)
      .then((res) => resolve(res.data))
      .catch((e) => reject(e.response?.data)),
  );

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // eslint-disable-next-line no-param-reassign
    if (config.headers) {
      config.headers.Authorization = `bearer ${localStorage.getItem(TOKEN_KEY)}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
