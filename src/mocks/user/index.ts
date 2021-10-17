import { rest } from 'msw';
import { baseURL } from '@/api';

export const getAnonymousUserQuery = () => {
  return rest.get(`${baseURL}/user/anonymous`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          anonymousId: '52881616-a9e7-424a-9da0-a36192d848e4',
          userId: '3',
        },
        statusCode: 200,
        message: 'Success',
      })
    );
  });
};

export default [getAnonymousUserQuery()];
