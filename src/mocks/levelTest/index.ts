import { rest } from 'msw';
import { baseURL } from '@/api';

export const getLevelTestFoodsQuery = () => {
  return rest.get(`${baseURL}/food/tests`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          foodList: [],
        },
        statusCode: 200,
        message: 'Success',
      })
    );
  });
};

export default [getLevelTestFoodsQuery()];
