import { apiClient } from '@/api';
import { Food, TASTE_LEVEL } from '@/types';

export interface Foods {
  data: Food[];
  statusCode: 200;
  message: 'Success';
}

interface GetFoodsParams {
  category?: string;
  hotLevel?: TASTE_LEVEL;
}

export const getFoods = async ({ category, hotLevel }: GetFoodsParams) => {
  const { data } = await apiClient.get<Foods>(`/food`, {
    params: { category, hotLevel },
  });

  return data;
};
