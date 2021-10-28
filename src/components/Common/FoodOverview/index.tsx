import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';
import theme from '@/styles/theme';
import { Food } from '@/types';

const FoodOverview = ({ image_url, name }: Food) => {
  return (
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
  );
};

export default FoodOverview;
