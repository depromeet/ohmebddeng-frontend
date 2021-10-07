import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { ReviewValue } from '@/types';
import FoodReview from '@/components/Review/FoodReview';
import styled from '@emotion/styled';

const Main = styled.main`
  background-color: black;
  font-family: NanumSquareOTF;
  text-align: center;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 140%;
  letter-spacing: 1.66667px;
  & h1 {
    font-weight: normal;
    font-size: 17px;
  }
  & h2 {
    font-family: SB AggroOTF;
    font-weight: normal;
    font-size: 22px;
  }
`;

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

    console.log(
      food1LevelValue,
      food1TasteValue,
      food2LevelValue,
      food2TasteValue,
      food3LevelValue,
      food3TasteValue
    );

    router.push('/testResult');
  };

  return (
    <Main>
      <h1>당신의 매운 느낌을 표현해주세요</h1>
      <FoodReview name="진라면 매운맛" ref={food1} />
      <FoodReview name="엽기떡볶이" ref={food2} />
      <FoodReview name="매운거 암궈나" ref={food3} />
      <button onClick={handleSubmit}>완료</button>
    </Main>
  );
};

export default Review;
