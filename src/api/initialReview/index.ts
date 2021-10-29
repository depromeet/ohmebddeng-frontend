import { apiClient } from '@/api';
import { User, userIdKey } from '@/api/user';
import { TASTE_LEVEL } from '@/types';

export interface CreatedReview {
  foodId: string;
  hotLevel: TASTE_LEVEL;
  tagIds: string[];
}

// 리뷰 결과 보내는 쿼리 작성
export const postInitialReviewQuery = async (reviewList: CreatedReview) => {
  const userId = localStorage.getItem(userIdKey);
  const { data } = await apiClient.post<User>('/review/foods', {
    userId,
    reviewList,
  });

  return data;
};
