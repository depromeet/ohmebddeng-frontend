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

export const postLevelTestQuery = () => {
  return rest.post(`${baseURL}/user/level`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          id: '1',
          anonymousId: 'd8ee8673-1fd6-4d95-a1de-f9c2a06c3e96',
          appleId: null,
          googleId: null,
          kakaoId: null,
          naverId: null,
          facebookId: null,
          email: null,
          password: null,
          nickname: null,
          profileImageUrl: null,
          createdAt: '2021-10-06T12:42:12.418Z',
          updatedAt: '2021-10-06T12:57:31.409Z',
          deletedAt: null,
          isDeleted: false,
          role: '',
          userLevel: {
            id: '1',
            name: '당신의 불타는 똥꼬',
            imageUrl: null,
            description:
              '다음 날 아침 화장실에서 심판을 받는다. 심판은 고통스럽고 따갑고 뜨겁다. 매콤함이 항문으로도 느껴지는 것만 같다..',
            level: 1,
          },
        },
        statusCode: 200,
        message: 'Success',
      })
    );
  });
};

export default [getLevelTestFoodsQuery(), postLevelTestQuery()];
