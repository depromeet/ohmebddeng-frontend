import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Header } from '@/components/Common';
import { ROUTES } from '@/constants';
import { TASTE_LEVEL } from '@/types';

const CategoryByTaste: NextPage = () => {
  const router = useRouter();
  const { level } = router.query;

  const handleClickTab = useCallback(
    (level: TASTE_LEVEL) => () => {
      router.push(`${ROUTES.CATEGORY}/${level}`);
    },
    [router]
  );

  return (
    <div>
      <Header type="center">오늘 뭐가 땡겨?</Header>
      <Wrapper>
        <Tabs>
          {Object.values(TASTE_LEVEL).map((_level) => (
            <Tab
              key={_level}
              active={_level === level}
              onClick={handleClickTab(_level)}
            >
              {_level}
            </Tab>
          ))}
        </Tabs>
        <Lists>
          {data.map((food) => (
            <FoodItem key={food.id}>
              <Image
                src={food.image_url}
                alt={food.name}
                width={52}
                height={42}
              />
              <div
                css={css`
                  margin-left: 26px;
                `}
              >
                <Name>{food.name}</Name>
                <Info>{food.description}</Info>
              </div>
            </FoodItem>
          ))}
        </Lists>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  padding: 0 16px;
`;
const Tabs = styled.nav`
  display: flex;
`;
const Tab = styled.button<{ active?: boolean }>`
  padding: 13px 0;
  flex: 1;
  color: ${({ theme }) => theme.colors.grey20};
  background-color: transparent;
  border: none;
  outline: none;

  ${({ theme, active }) =>
    active &&
    css`
      color: ${theme.colors.white};
      border-bottom: 2px solid ${theme.colors.red};
    `}
`;
const Lists = styled.ul`
  margin: 32px 0 0 0;
  padding: 0 0 0 14px;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 44px;
  }
`;
const FoodItem = styled.div`
  display: flex;
`;
const Name = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 15px;
`;
const Info = styled.div`
  font-size: 13px;
  color: #8e8e93;
`;

export default CategoryByTaste;

// TODO: API로부터 데이터 불러오기
const data = [
  {
    id: 1,
    name: '엽기떡볶이 1단계',
    image_url: '/assets/FoodReview/0.svg',
    description: '#칼칼한 #매콤달콤',
  },
  {
    id: 2,
    name: '엽기떡볶이 1단계',
    image_url: '/assets/FoodReview/0.svg',
    description: '#칼칼한 #매콤달콤',
  },
  {
    id: 3,
    name: '엽기떡볶이 1단계',
    image_url: '/assets/FoodReview/0.svg',
    description: '#칼칼한 #매콤달콤',
  },
  {
    id: 4,
    name: '엽기떡볶이 1단계',
    image_url: '/assets/FoodReview/0.svg',
    description: '#칼칼한 #매콤달콤',
  },
];
