import styled from '@emotion/styled';
import React from 'react';
import { SpicyLevelIcon } from '@/components/Common';
import { TASTE_LEVEL } from '@/types';

interface TasteData {
  level: TASTE_LEVEL;
  count: number;
}

export interface SpicyEvalutationProps {
  totalCount: number;
  testData: TasteData[];
}

const SpicyEvaluation = ({ totalCount, testData }: SpicyEvalutationProps) => {
  const getPercentage = (count: number): number => (count / totalCount) * 100;

  return (
    <Container>
      {testData.map(({ level, count }) => (
        <Item key={level}>
          <SpicyLevelIcon level={level} checked={true} width={28} height={28} />
          <Level>{level}</Level>
          <Progress>
            <Bar width={getPercentage(count)} />
          </Progress>
          <Number>{count}</Number>
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 343px;
  min-height: 177px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.grey40};
  padding: 20px 16px 21px 28px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Level = styled.span`
  min-width: 25px;
  margin-left: 8px;
`;

const Number = styled.span`
  padding: 5px 12px;
`;

const Progress = styled.div`
  width: 178px;
  height: 6px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.grey70};
  margin: 0 12px;
`;

const Bar = styled.div<{ width: number }>`
  position: relative;
  float: left;
  border-radius: 14px;
  height: 100%;
  width: ${({ width }) => `${width}%`};
  background-color: ${({ theme }) => theme.colors.red};
`;

export default SpicyEvaluation;
