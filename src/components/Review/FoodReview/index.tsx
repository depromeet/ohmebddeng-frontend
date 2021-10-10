import React from 'react';
import Image from 'next/image';
import { LEVEL, TASTE } from '@/types';
import { SpicyLevelForm, TasteForm } from '..';
import svg_0 from 'public/assets/FoodReview/0.svg';
import styled from '@emotion/styled';

interface Props {
  name: string;
  level?: LEVEL;
  taste?: Set<TASTE>;
  onChangeLevel: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTaste: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FoodReview = ({
  name,
  level,
  taste,
  onChangeLevel,
  onChangeTaste,
}: Props) => {
  return (
    <Container>
      <Title>
        <Image src={svg_0} alt="thumnail" />
        <H2>{name}</H2>
      </Title>
      <SpicyLevelForm level={level} onChange={onChangeLevel} />
      <TasteForm taste={taste} onChange={onChangeTaste} />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 315px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px 16px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  margin-left: 8px;
`;

export default FoodReview;
