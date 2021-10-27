import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { Header, SpicyLevelSection } from '@/components/Common';
import FoodOverview from '@/components/Common/FoodOverview';
import Button from '@/components/Input/Button';
import { TasteForm } from '@/components/Review';
import { ROUTES } from '@/constants';
import { Food, LEVEL, ReviewState, TASTE } from '@/types';

const ReviewWrite: NextPage<Food> = ({
  image_url = '/assets/FoodReview/0.svg',
  name = '진라면 순한맛',
  id = '1',
}) => {
  const router = useRouter();
  const [review, setReview] = useState<ReviewState>({ taste: new Set() });
  const food = { image_url, name, id } as Food;

  const handleCheckLevel =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      const level = (event.target as HTMLInputElement).value as LEVEL;
      setReview({ ...review, level });
    };
  const handleCheckTaste =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      const targetTaste = (event.target as HTMLInputElement).value as TASTE;
      const taste = review.taste ?? new Set();
      taste.has(targetTaste)
        ? taste.delete(targetTaste)
        : taste.add(targetTaste);
      setReview({ ...review, taste });
    };
  const handleClick = useCallback(() => {
    router.push(ROUTES.MAIN);
  }, [router]);

  return (
    <>
      <Header type="center">
        <span>리뷰 작성하기</span>
      </Header>

      <FoodOverview {...food} />
      <SpicyLevelSection
        disabled={false}
        level={review?.level}
        onChange={handleCheckLevel()}
      />
      <TasteSection>
        <h3>어땠나요?</h3>
        <TasteForm taste={review?.taste} onChange={handleCheckTaste()} />
      </TasteSection>

      <Button
        buttonType="contained"
        color="red"
        rounded={false}
        css={css`
          width: 100%;
        `}
        onClick={() => handleClick()}
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
