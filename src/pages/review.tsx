import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { postInitialReviewQuery, CreatedReview } from '@/api/initialReview';
import { getLevelTestFoodsQuery, LevelTestFoods } from '@/api/levelTest';
import { Header, SpicyLevelForm } from '@/components/Common';
import Button from '@/components/Input/Button';
import { TasteForm } from '@/components/Review';
import { ROUTES } from '@/constants';
import { LEVEL, TASTE, ReviewState } from '@/types';
import svg_0 from 'public/assets/FoodReview/0.svg';

const foodInfo = new Map();

const Review: NextPage = () => {
  const router = useRouter();
  const [isTestDone, setIsTestDone] = useState(false);
  const [reviews, setReviews] = useState<Map<string, ReviewState>>(new Map());
  const { data: foods } = useQuery<LevelTestFoods>(['initialReviewFoods'], () =>
    getLevelTestFoodsQuery()
  );

  const mutation = useMutation(postInitialReviewQuery, {
    onSuccess: () => router.push(ROUTES.TEST_RESULT),
  });

  useEffect(() => {
    if (foods?.data) {
      const map = new Map();
      foods.data.forEach(({ name, subName, id }) => {
        map.set(`${name} ${subName}`, {});
        foodInfo.set(`${name} ${subName}`, id);
        setReviews(map);
      });
    }
  }, [foods]);

  useEffect(() => {
    for (const [_, { level, taste }] of Array.from(reviews.entries())) {
      if (!level || !taste || !taste.size) {
        setIsTestDone(false);
        return;
      }
    }
    setIsTestDone(true);
  }, [reviews]);

  const handleSubmit = () => {
    if (!isTestDone) {
      alert('선택을 완료해주세요');
      return;
    }
    let result = [] as CreatedReview[];
    reviews.forEach(({ level = LEVEL.냠냠, taste = [] }, foodName) => {
      const tagIds = Array.from(taste);
      result.push({ hotLevel: level, tagIds, foodId: foodInfo.get(foodName) });
    });
    console.log(result);
    mutation.mutate(result);
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
        <span>리뷰 {foods?.data.length}개만 부탁해...</span>
      </Header>
      <Container>
        <ReviewContainer>
          {foods &&
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
                  <Divider>
                    <TasteForm
                      taste={data?.taste}
                      onChange={handleCheckTaste(foodName)}
                    />
                  </Divider>
                </ReviewSection>
              );
            })}
        </ReviewContainer>
        <Button
          buttonType={'contained'}
          color={isTestDone ? 'red' : 'grey'}
          rounded={false}
          onClick={handleSubmit}>
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

const Divider = styled.div`
  border-top: ${({ theme }) => `2px solid ${theme.colors.grey40}`};
`;

const ReviewSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
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
