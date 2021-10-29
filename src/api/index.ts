import axios from 'axios';

export const baseURL = 'https://api.ohmebddeng.kr/v1';

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export type Response<T> = {
  data: T;
  statusCode: number;
  message: string;
};
