import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { INITIAL_FOOD, ReviewValue } from '@/types';
import FoodReview from '@/components/Review/FoodReview';
import TitleBar from '@/components/Common/TitleBar';
import styled from '@emotion/styled';

const Review: NextPage = () => {
  const router = useRouter();

  const food1 = useRef<ReviewValue>({ levelValue: '', tasteValue: [] });
  const food2 = useRef<ReviewValue>({ levelValue: '', tasteValue: [] });
  const food3 = useRef<ReviewValue>({ levelValue: '', tasteValue: [] });

  const handleSubmit = () => {
    const { levelValue: food1LevelValue, tasteValue: food1TasteValue } =
      food1.current;
    const { levelValue: food2LevelValue, tasteValue: food2TasteValue } =
      food2.current;
    const { levelValue: food3LevelValue, tasteValue: food3TasteValue } =
      food3.current;

    if (
      !food1LevelValue.length ||
      !food1TasteValue.length ||
      !food2LevelValue.length ||
      !food2TasteValue.length ||
      !food3LevelValue.length ||
      !food3TasteValue.length
    )
      return;
    router.push('/testResult');
  };

  return (
    <Container>
      <TitleBar
        backButton={true}
        backLocation="/"
        content="당신의 매운 느낌을 표현해주세요"
      />
      <FoodReview name={INITIAL_FOOD.FOOD1} ref={food1} />
      <FoodReview name={INITIAL_FOOD.FOOD2} ref={food2} />
      <FoodReview name={INITIAL_FOOD.FOOD3} ref={food3} />
      <Button onClick={handleSubmit}>완료</Button>
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

const Button = styled.button``;

export default Review;
