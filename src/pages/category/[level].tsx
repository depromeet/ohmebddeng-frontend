import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { Foods, getFoods } from '@/api/food';
import { Header } from '@/components/Common';
import { ROUTES } from '@/constants';
import { TASTE_LEVEL } from '@/types';
import arrow_under from '@public/assets/common/arrow_under.svg';

const CategoryByTaste: NextPage = () => {
  const router = useRouter();
  const { level } = router.query;
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState<string | undefined>(undefined);

  const { data } = useQuery<Foods>(
    ['getFoods', category, level],
    () => getFoods({ category, hotLevel: level as TASTE_LEVEL }),
    { enabled: !!level }
  );

  const handleClickTab = useCallback(
    (level: TASTE_LEVEL) => () => {
      router.push(`${ROUTES.CATEGORY}/${level}`);
    },
    [router]
  );

  const handleClickFilterButton = useCallback(() => {
    setShowFilter((showFilter) => !showFilter);
  }, []);

  const handleClickCategory = useCallback(
    (category: string | undefined) => () => {
      setCategory(category);
      setShowFilter(false);
    },
    []
  );

  const handleClickFood = useCallback(
    (foodId: string) => () => {
      router.push(`${ROUTES.FOOD_DETAIL}/${foodId}`);
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
        <FilterContainer>
          <div
            css={css`
              position: relative;
            `}
          >
            <FilterButton onClick={handleClickFilterButton}>
              <span>{category ?? '카테고리 선택'}</span>
              <Image src={arrow_under} alt="arrow" />
            </FilterButton>
            {showFilter && (
              <FilterContent>
                {categories.map((category) => (
                  <li
                    key={category.label}
                    onClick={handleClickCategory(category.value)}
                  >
                    {category.label}
                  </li>
                ))}
              </FilterContent>
            )}
          </div>
        </FilterContainer>
        <Lists>
          {data?.data.map((food) => (
            <FoodItem key={food.name} onClick={handleClickFood(food.id)}>
              <Image
                src={food.imageUrl}
                alt={food.name}
                width={52}
                height={84}
              />
              <FoodInfo>
                <Name>
                  {food.name} {food.subName}
                </Name>
                <Info>
                  Lorem ipsum dolor, <br />
                  sit amet consectetur adipisicing elit.
                </Info>
              </FoodInfo>
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
const FilterContainer = styled.div`
  padding: 9px 0;
  text-align: right;
  margin-top: 12px;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey0};
    margin-right: 8px;
  }
`;
const FilterButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
const FilterContent = styled.ul`
  top: 20px;
  right: 0;
  position: absolute;
  z-index: 1;
  background-color: #1f1f1f;
  padding: 10px;

  & li {
    display: block;
    padding: 8px;
    cursor: pointer;
  }
`;
const Lists = styled.ul`
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
const FoodInfo = styled.div`
  margin-top: 10px;
  margin-left: 26px;
  text-align: left;
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

const categories = [
  { label: '전체', value: undefined },
  { label: '분식', value: '분식' },
  { label: '라면', value: '라면' },
  { label: '떡볶이', value: '떡볶이' },
  { label: '한식', value: '한식' },
  { label: '치킨', value: '치킨' },
  { label: '피자', value: '피자' },
  { label: '일식', value: '일식' },
  { label: '중식', value: '중식' },
  { label: '족발/보쌈', value: '족발/보쌈' },
  { label: '찜/탕', value: '찜/탕' },
  { label: '양식', value: '양식' },
  { label: '버거', value: '버거' },
  { label: '디저트', value: '디저트' },
  { label: '아시안', value: '아시안' },
  { label: '멕시칸', value: '멕시칸' },
];
