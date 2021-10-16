import { rest } from 'msw';
import { baseURL } from '@/api';

export const getLevelTestFoodsQuery = () => {
  return rest.get(`${baseURL}/food/tests`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          foodList: [
            {
              id: 1,
              name: '진라면 순한맛',
              image_url: '/assets/FoodReview/0.svg',
            },
            {
              id: 2,
              name: '진라면 매운맛',
              image_url: '/assets/FoodReview/0.svg',
            },
            {
              id: 3,
              name: '진라면 매운맛 3',
              image_url: '/assets/FoodReview/0.svg',
            },
            {
              id: 4,
              name: '진라면 매운맛 4',
              image_url: '/assets/FoodReview/0.svg',
            },
            {
              id: 5,
              name: '진라면 매운맛 5',
              image_url: '/assets/FoodReview/0.svg',
            },
          ],
        },
        statusCode: 200,
        message: 'Success',
      })
    );
  });
};

export default [getLevelTestFoodsQuery()];
