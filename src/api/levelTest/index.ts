import { apiClient } from '@/api';
import { User, userIdKey } from '@/api/user';
import { Food, LEVEL } from '@/types';

export interface LevelTestFoods {
  data: Food[];
  statusCode: 200;
  message: 'Success';
}

export const getLevelTestFoodsQuery = async () => {
  const { data } = await apiClient.get<LevelTestFoods>(`/food/tests`);

  return data;
};

export const postLevelTestQuery = async (testResults: {
  [foodId: string]: LEVEL;
}) => {
  const userId = localStorage.getItem(userIdKey);
  const { data } = await apiClient.post<User>(`/user/level`, {
    userId,
    testResults,
  });

  return data;
};
