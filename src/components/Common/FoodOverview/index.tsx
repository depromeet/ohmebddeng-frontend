import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import theme from '@/styles/theme';
import { Food } from '@/types';

interface FoodOverviewProps extends Food {
  nameVisable?: boolean;
}

const FoodOverview = ({
  image_url,
  name,
  nameVisable = true,
}: FoodOverviewProps) => {
  return (
    <Container>
      <Image src={image_url} alt={name} width={124} height={170} />
      {nameVisable && <p>{name}</p>}
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
  }
`;

export default FoodOverview;
