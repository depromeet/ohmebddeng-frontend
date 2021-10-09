import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { INITIAL_FOOD, LEVEL, TASTE, ReviewState } from '@/types';
import FoodReview from '@/components/Review/FoodReview';
import TitleBar from '@/components/Common/TitleBar';
import Button from '@/components/Input/Button';
import styled from '@emotion/styled';

const Review: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [reviews, setReviews] = useState<Map<string, ReviewState>>(new Map());

  useEffect(() => {
    // 서버에서 리뷰 등록할 음식 가져오기
    const map = new Map();
    map.set(INITIAL_FOOD.FOOD1, {});
    map.set(INITIAL_FOOD.FOOD2, {});
    map.set(INITIAL_FOOD.FOOD3, {});
    setReviews(map);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    for (const [_, { level, taste }] of Array.from(reviews.entries())) {
      if (!level || !taste || taste.size === 0) {
        setIsAllChecked(false);
        return;
      }
    }
    setIsAllChecked(true);
  }, [reviews]);

  const handleSubmit = () => {
    router.push('/testResult');
  };

  const handleCheckLevel =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const level = (event.target as HTMLInputElement).value as LEVEL;
      setReviews(
        (prev) =>
          new Map(prev.set(name, { level, taste: prev.get(name)?.taste }))
      );
    };

  const handleCheckTaste =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const formerReview = reviews.get(name);
      const taste = (event.target as HTMLInputElement).value as TASTE;
      const updatedTaste = formerReview?.taste ?? new Set();
      updatedTaste.has(taste)
        ? updatedTaste.delete(taste)
        : updatedTaste.add(taste);
      setReviews(
        (prev) =>
          new Map(prev.set(name, { ...formerReview, taste: updatedTaste }))
      );
    };

  return (
    <Container>
      <TitleBar
        backButton={true}
        backLocation="/"
        content="당신의 매운 느낌을 표현해주세요"
      />
      {!isLoading &&
        Object.keys(Object.fromEntries(reviews)).map((foodName) => {
          const data = reviews.get(foodName);
          return (
            <FoodReview
              name={foodName}
              key={foodName}
              level={data?.level}
              taste={data?.taste}
              handleChangeLevel={handleCheckLevel(foodName)}
              handleChangeTaste={handleCheckTaste(foodName)}
            />
          );
        })}

      <Button
        buttonType={'contained'}
        color={isAllChecked ? 'red' : 'grey'}
        rounded={false}
        onClick={handleSubmit}
      >
        완료
      </Button>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 16px 0 17px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

export default Review;
