import { apiClient } from '@/api';
import { USER_LEVEL, USER_LEVEL_NUMBER, Food } from '@/types';

export interface FoodCounts {
  data: {
    hotLevelCount: { string: number };
    tasteTagCount: { string: number };
    totalHotLevelCount: number;
    totalTasteTagCount: number;
  };
  statusCode: 200;
  message: 'Success';
}

export interface FoodDetails {
  data: Food;
  statusCode: 200;
  message: 'Success';
}

export const getFoodDetail = async (foodId: string) => {
  if (!foodId) return {} as FoodDetails;
  const { data } = await apiClient.get<FoodDetails>(`/food/${foodId}`);
  return data;
};

export const getFoodCountsQuery = async (foodId: string, level: USER_LEVEL) => {
  const { data } = await apiClient.get<FoodCounts>(
    `/review/food/count/${foodId}?level=${USER_LEVEL_NUMBER[level]}`
  );

  return data;
};
