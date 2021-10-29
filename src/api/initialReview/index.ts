import { apiClient } from '@/api';
import { User, userIdKey } from '@/api/user';
import { Food, TASTE_LEVEL } from '@/types';

export interface InitialReviewFood {
  data: {
    foodList: Food[];
  };
  statusCode: 200;
  message: 'Success';
}

export interface CreatedReview {
  foodId: string;
  hotLevel: TASTE_LEVEL;
  tagIds: string[];
}

export const getInitialReviewFoodQuery = async () => {
  const { data } = await apiClient.get<InitialReviewFood>(`/food/tests`);
  return data;
};

// 리뷰 결과 보내는 쿼리 작성
export const postInitialReviewQuery = async (reviewResult: CreatedReview[]) => {
  const userId = localStorage.getItem(userIdKey);
};
