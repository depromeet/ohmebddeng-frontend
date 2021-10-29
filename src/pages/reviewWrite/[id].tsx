import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { FoodDetails, getFoodDetail } from '@/api/foodDetail';
import { postInitialReviewQuery } from '@/api/initialReview';
import { Header, SpicyLevelSection } from '@/components/Common';
import FoodOverview from '@/components/Common/FoodOverview';
import Button from '@/components/Input/Button';
import { TasteForm } from '@/components/Review';
import { ROUTES } from '@/constants';
import { Food, LEVEL, ReviewState, TASTE } from '@/types';

const ReviewWrite: NextPage<Food> = () => {
  const router = useRouter();
  const foodId = router.query.id as string;
  const [isTestDone, setIsTestDone] = useState(false);
  const [review, setReview] = useState<ReviewState>({});
  const { data: foodDetail } = useQuery<FoodDetails>(
    ['FoodDetails', foodId],
    () => getFoodDetail(foodId),
    { enabled: !!foodId }
  );

  const food = {
    id: foodId,
    imageUrl: foodDetail ? foodDetail.data.imageUrl : '',
    name: foodDetail ? foodDetail.data.name : '',
    subName: foodDetail ? foodDetail.data.subName : '',
  };

  const mutation = useMutation(postInitialReviewQuery, {
    onSuccess: () => router.push(`${ROUTES.FOOD_DETAIL}/${foodId}`),
  });

  const handleCheckLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const level = (event.target as HTMLInputElement).value as LEVEL;
    setReview({ ...review, level });
  };
  const handleCheckTaste = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetTaste = (event.target as HTMLInputElement).value as TASTE;
    const taste = review.taste ?? new Set();
    taste.has(targetTaste) ? taste.delete(targetTaste) : taste.add(targetTaste);
    setReview({ ...review, taste });
  };
  const handleSubmit = () => {
    if (!isTestDone) {
      alert('선택을 완료해주세요');
      return;
    }
    const tagIds = Array.from(review.taste ?? []);
    mutation.mutate({ hotLevel: review.level as LEVEL, tagIds, foodId });
  };

  useEffect(() => {
    if (!review.level || !review.taste || !review.taste.size) {
      setIsTestDone(false);
      return;
    }
    setIsTestDone(true);
  }, [review]);

  return (
    <>
      <Header type="center">
        <span>리뷰 작성하기</span>
      </Header>

      {food.imageUrl && <FoodOverview {...food} />}
      <SpicyLevelSection
        disabled={false}
        level={review?.level}
        onChange={handleCheckLevel}
      />
      <TasteSection>
        <h3>어땠나요?</h3>
        <TasteForm taste={review?.taste} onChange={handleCheckTaste} />
      </TasteSection>

      <Button
        buttonType="contained"
        color={isTestDone ? 'red' : 'grey'}
        rounded={false}
        css={css`
          width: 100%;
        `}
        onClick={handleSubmit}
      >
        등록
      </Button>
    </>
  );
};

const TasteSection = styled.div`
  padding: 38px 26px 48px;
  text-align: left;
`;

export default ReviewWrite;
