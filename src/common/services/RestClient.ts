/* eslint-disable no-underscore-dangle */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const http = axios.create({
  baseURL: 'https://over-review.southeastasia.cloudapp.azure.com/api/',
});

export const post = <T>(endpoint: string, data?: T): Promise<AxiosResponse<T>> =>
  new Promise((resolve, reject) =>
    http
      .post(endpoint, data)
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

export const get = (endpoint: string): Promise<AxiosResponse> =>
  new Promise((resolve, reject) =>
    http
      .get(endpoint)
      .then((res) => resolve(res.data))
      .catch((e) => reject(e.response?.data)),
  );

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // eslint-disable-next-line no-param-reassign
    // config.headers.Authorization = localStorage.getItem(TOKEN_KEY);

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
