import { apiClient } from '@/api';
import { Food } from '@/types';

export interface LevelTestFoods {
  data: {
    foodList: Food[];
  };
  statusCode: 200;
  message: 'Success';
}

export const getLevelTestFoodsQuery = async (size: number) => {
  const { data } = await apiClient.get<LevelTestFoods>(
    `/food/tests?size=${size}`
  );

  return data;
};
