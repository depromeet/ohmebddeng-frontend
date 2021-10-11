import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import TitleBar from '@/components/Common/TitleBar';
import Button from '@/components/Input/Button';
import { SpicyLevelForm, TasteForm } from '@/components/Review';
import { INITIAL_FOOD, LEVEL, TASTE, ReviewState } from '@/types';
import svg_0 from 'public/assets/FoodReview/0.svg';

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
    if (!isAllChecked) {
      alert('선택을 완료해주세요');
      return;
    }
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
      <TitleBar backButton={true} backLocation="/">
        당신의 매운 느낌을 표현해주세요
      </TitleBar>
      <Content>
        {!isLoading &&
          Object.keys(Object.fromEntries(reviews)).map((foodName) => {
            const data = reviews.get(foodName);
            return (
              <ReviewSection key={foodName}>
                <ReviewTitle>
                  <Image src={svg_0} alt="thumnail" />
                  <H2>{foodName}</H2>
                </ReviewTitle>
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
      </Content>
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
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 17px;
  height: 100%;
`;

const Content = styled.div`
  margin: 16px 0 80px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

const ReviewSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 315px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px 16px;
`;

const ReviewTitle = styled.div`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  margin-left: 8px;
`;

export default Review;
