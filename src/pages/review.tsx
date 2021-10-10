import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import FoodReview from '@/components/Review/FoodReview';
import { ReviewValue } from '@/types';

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
    <main>
      <h1>리뷰</h1>
      <FoodReview name="진라면 매운맛" ref={food1} />
      <FoodReview name="엽기떡볶이" ref={food2} />
      <FoodReview name="매운거 암궈나" ref={food3} />
      <button onClick={handleSubmit}>확인</button>
    </main>
  );
};

export default Review;
