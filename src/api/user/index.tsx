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
  try {
    const { data } = await apiClient.get<AnonymousUser>(`/user/anonymous`);

    localStorage.setItem(anonymousUserIdKey, data.data.anonymousId);
    localStorage.setItem(userIdKey, data.data.userId);

    return data;
  } catch (error) {
    // TODO: anonymous user id 저장 실패에 대한 피드백을 유저에게 전달해야한다.
    console.log(error);
    throw error;
  }
};

export interface User {
  data: {
    id: string;
    anonymousId: string;
    appleId: string | null;
    googleId: string | null;
    kakaoId: string | null;
    naverId: string | null;
    facebookId: string | null;
    email: string | null;
    password: string | null;
    nickname: string | null;
    profileImageUrl: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    isDeleted: boolean;
    role: string;
    userLevel: {
      id: string;
      name: string;
      imageUrl: string;
      description: string;
      level: number;
    };
  };
  statusCode: number;
  message: string;
}
