import { apiClient, Response } from '@/api';

export type RandomFoodType = {
  id: string;
  name: string;
  subName: string;
  imageUrl: string;
};

export const getRandomFood = async () => {
  const {
    data: { data },
  } = await apiClient.get<Response<RandomFoodType>>('/food/random');
  return data;
};
