import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.ohmebddeng.kr/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
