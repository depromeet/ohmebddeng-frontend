import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { ROUTES } from '@/constants';
import { TASTE } from '@/types';

interface TasteData {
  taste: TASTE;
  count: number;
}

export interface TasteEvaluationProps {
  testData: TasteData[];
  foodId: string;
}

const TasteEvaluation = ({ testData, foodId }: TasteEvaluationProps) => {
  const router = useRouter();
  const totalCount = testData.reduce((r, c) => r + c.count, 0);
  const handleClick = () => {
    router.push(`${ROUTES.REVIEW_WRITE}/${foodId}`);
  };

  return (
    <>
      <TasteContainer>
        <p>리뷰 ({totalCount})</p>
        <ReviewBtn onClick={handleClick}>리뷰 작성하기</ReviewBtn>
      </TasteContainer>
      <TasteContantList>
        {testData.map(({ taste, count }) => (
          <TasteContant key={taste}>
            {taste}({count})
          </TasteContant>
        ))}
      </TasteContantList>
    </>
  );
};

const TasteContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 20px 20px;

  & p {
    font-size: 17px;
  }
`;

const TasteContantList = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  gap: 12px 12px;
`;

const TasteContant = styled.label`
  display: inline-block;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.grey40};
  color: ${({ theme }) => theme.colors.grey0};
  padding: 12px 18px 11px;
  text-align: center;
`;

const ReviewBtn = styled.div`
  cursor: pointer;
`;

export default TasteEvaluation;
