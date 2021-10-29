import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { ROUTES } from '@/constants';

export interface TasteEvaluationProps {
  countData: any;
  totalCount: number;
}

const TasteEvaluation = ({ countData, totalCount }: TasteEvaluationProps) => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(ROUTES.REVIEW_WRITE);
  }, [router]);

  return (
    <>
      <TasteContainer>
        <p>리뷰 ({totalCount})</p>
        <ReviewBtn onClick={handleClick}>리뷰 작성하기</ReviewBtn>
      </TasteContainer>
      <TasteContantList>
        {Object.keys(countData).map((taste) => (
          <TasteContant key={taste}>
            {taste}({countData[taste]})
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
