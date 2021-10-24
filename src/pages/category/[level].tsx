import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Header } from '@/components/Common';
import { TASTE_LEVEL } from '@/types';

const CategoryByTaste: NextPage = () => {
  const router = useRouter();
  const { level } = router.query;
  return (
    <div>
      <Header type="center">오늘 뭐가 땡겨?</Header>
      <Wrapper>
        <Tabs>
          {Object.values(TASTE_LEVEL).map((_level) => (
            <Tab key={_level} active={_level === level}>
              {_level}
            </Tab>
          ))}
        </Tabs>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  padding: 0 16px;
`;
const Tabs = styled.nav`
  display: flex;
`;
const Tab = styled.button<{ active?: boolean }>`
  padding: 13px 0;
  flex: 1;
  color: ${({ theme }) => theme.colors.grey20};
  background-color: transparent;
  border: none;
  outline: none;

  ${({ theme, active }) =>
    active &&
    css`
      color: ${theme.colors.white};
      border-bottom: 2px solid ${theme.colors.red};
    `}
`;

export default CategoryByTaste;
