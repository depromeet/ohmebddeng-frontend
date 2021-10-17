import { apiClient } from '@/api';

export const anonymousUserIdKey = 'ohmebddeng-anonymous-user-id';
export const userIdKey = 'ohmebddeng-user-id';

export interface AnonymousUser {
  data: {
    anonymousId: string;
    userId: string;
  };
  statusCode: number;
  message: string;
}

export const getAnonymousUserQuery = async () => {
  const { data } = await apiClient.get<AnonymousUser>(`/user/anonymous`);

  try {
    localStorage.setItem(anonymousUserIdKey, data.data.anonymousId);
    localStorage.setItem(userIdKey, data.data.userId);
  } catch (error) {
    // TODO: anonymous user id 저장 실패에 대한 피드백을 유저에게 전달해야한다.
    console.log(error);
  }

  return data;
};
