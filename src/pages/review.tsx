import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Common';
import Button from '@/components/Input/Button';
import { SpicyLevelForm, TasteForm } from '@/components/Review';
import { ROUTES } from '@/constants';
import { INITIAL_FOOD, LEVEL, TASTE, ReviewState } from '@/types';
import svg_0 from 'public/assets/FoodReview/0.svg';

const init_food = [
  { name: INITIAL_FOOD.FOOD1 },
  { name: INITIAL_FOOD.FOOD2 },
  { name: INITIAL_FOOD.FOOD3 },
];

const Review: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [reviews, setReviews] = useState<Map<string, ReviewState>>(new Map());

  useEffect(() => {
    // 서버에서 리뷰 등록할 음식 가져오기
    const map = new Map();
    init_food.forEach((food) => {
      map.set(food.name, {});
    });
    setReviews(map);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    for (const [_, { level, taste }] of Array.from(reviews.entries())) {
      if (!level || !taste || !taste.size) {
        setIsAllChecked(false);
        return;
      }
    }
    setIsAllChecked(true);
  }, [reviews]);

  const handleSubmit = () => {
    if (!isAllChecked) {
      alert('선택을 완료해주세요');
      return;
    }
    router.push(ROUTES.TEST_RESULT);
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
    <>
      <Header type="center">
        <span>리뷰 3개만 부탁해...</span>
      </Header>
      <Container>
        <ReviewContainer>
          {!isLoading &&
            Object.keys(Object.fromEntries(reviews)).map((foodName) => {
              const data = reviews.get(foodName);
              return (
                <ReviewSection key={foodName}>
                  <div>
                    <Image src={svg_0} alt="thumnail" />
                    <h2>{foodName}</h2>
                  </div>
                  <SpicyLevelForm
                    level={data?.level}
                    onChange={handleCheckLevel(foodName)}
                  />
                  <TasteForm
                    taste={data?.taste}
                    onChange={handleCheckTaste(foodName)}
                  />
                </ReviewSection>
              );
            })}
        </ReviewContainer>
        <Button
          buttonType={'contained'}
          color={isAllChecked ? 'red' : 'grey'}
          rounded={false}
          onClick={handleSubmit}
        >
          완료
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 17px;
  height: 100%;
`;

const ReviewContainer = styled.div`
  margin: 16px 0 80px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

const ReviewSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px 0;
  width: 100%;
  min-height: 315px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px 16px;

  & div {
    display: flex;
    align-items: center;

    & h2 {
      margin-left: 8px;
    }
  }
`;

export default Review;
