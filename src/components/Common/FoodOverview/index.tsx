import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import theme from '@/styles/theme';
import { Food } from '@/types';

interface FoodOverviewProps extends Food {
  nameVisable?: boolean;
}

const FoodOverview = ({
  imageUrl,
  name,
  subName,
  nameVisable = true,
}: FoodOverviewProps) => {
  return (
    <Container>
      <Image src={imageUrl} alt={name} width={124} height={170} />
      {nameVisable && (
        <p>
          {name}
          <br />
          <span>{subName}</span>
        </p>
      )}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 54px;

  & p {
    font-family: SBAggroB;
    font-weight: normal;
    padding-top: 18px;
    font-size: 32px;
    line-height: 140%;
    color: ${theme.colors.grey0};

    & span {
      font-family: SBAggroB;
      font-size: 26px;
    }
  }
`;

export default FoodOverview;
