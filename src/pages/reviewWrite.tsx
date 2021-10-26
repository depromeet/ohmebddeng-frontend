import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import React, { useState } from 'react';
import { Header } from '@/components/Common';
import { SpicyLevelForm } from '@/components/Review';
import theme from '@/styles/theme';
import { Food, LEVEL, ReviewState } from '@/types';

const ReviewWrite: NextPage<Food> = ({
  image_url = '/assets/FoodReview/0.svg',
  name = '진라면 순한맛',
  id = 1,
}) => {
  const [review, setReview] = useState<ReviewState>();

  const handleCheckLevel =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      const level = (event.target as HTMLInputElement).value as LEVEL;
      setReview({ level });
    };

  return (
    <div>
      <div>
        <Header type="center">리뷰 작성하기</Header>

        <section
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 62px 54px;
          `}
        >
          <Image src={image_url} alt={name} width={124} height={170} />
          <p
            css={css`
              font-family: SBAggroB;
              font-weight: normal;
              padding-top: 18px;
              font-size: 32px;
              line-height: 140%;
              color: ${theme.colors.grey0};
            `}
          >
            {name}
          </p>
        </section>

        <section
          css={css`
            margin: 0 16px;
            padding: 24px 26px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 14px;
          `}
        >
          <h3
            css={css`
              margin-bottom: 26px;
              font-weight: 800;
              font-size: 17px;
              color: ${theme.colors.white};
            `}
          >
            얼마나 맵게 느껴지나요?
          </h3>
          <SpicyLevelForm level={review?.level} onChange={handleCheckLevel()} />
        </section>
      </div>
    </div>
  );
};

export default ReviewWrite;

const size = 12;
