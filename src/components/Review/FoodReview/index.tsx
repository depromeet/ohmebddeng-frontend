import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Image from 'next/image';
import { LEVEL, TASTE, ReviewValue } from '@/types';
import { SpicyLevelInput, TasteTagInput } from '@/components/Common';
import svg_0 from 'public/assets/FoodReview/0.svg';
import styled from '@emotion/styled';
import useInput from '@/hooks/useInput';

interface Props {
  name: string;
}

const FoodReview = ({ name }: Props, ref: React.Ref<ReviewValue>) => {
  const [levelValue, levelValueChangeHandler] = useInput();
  const [tasteValues, setTasteValues] = useState<Set<TASTE>>(new Set());

  const tasteValueChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = (event.target as HTMLInputElement).value as TASTE;
    tasteValues.has(target)
      ? setTasteValues(
          (prev) => new Set(Array.from(prev).filter((v) => v !== target))
        )
      : setTasteValues((prev) => new Set(prev.add(target)));
  };

  useImperativeHandle(
    ref,
    () => ({ levelValue, tasteValue: Array.from(tasteValues) }),
    [levelValue, tasteValues]
  );

  return (
    <Container>
      <Title>
        <Image src={svg_0} alt="thumnail" />
        <H2>{name}</H2>
      </Title>
      <SpicyLevelForm id="spicyLevelForm">
        {Object.values(LEVEL).map((name) => (
          <SpicyLevelInput
            key={name}
            name={name}
            onChange={levelValueChangeHandler}
            checked={levelValue === name}
          />
        ))}
      </SpicyLevelForm>
      <TasteForm id="tasteForm">
        {Object.values(TASTE).map((name) => (
          <TasteTagInput
            key={name}
            name={name}
            onChange={tasteValueChangeHandler}
            checked={tasteValues.has(name)}
          />
        ))}
      </TasteForm>
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

const SpicyLevelForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 0 24px;
`;

const TasteForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 9px 12px;
  padding-top: 20px;
  border-top: 1px solid #3a3a3c;
`;

export default forwardRef(FoodReview);
