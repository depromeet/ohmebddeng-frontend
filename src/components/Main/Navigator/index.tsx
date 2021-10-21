import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { ROUTES } from '@/constants';
import { TASTE_LEVEL } from '@/types';
import spicylevel_0 from 'public/assets/Main/spicy-level-0.svg';
import spicylevel_1 from 'public/assets/Main/spicy-level-1.svg';
import spicylevel_2 from 'public/assets/Main/spicy-level-2.svg';
import spicylevel_3 from 'public/assets/Main/spicy-level-3.svg';

const iconByLevel = {
  [TASTE_LEVEL.냠냠]: spicylevel_0,
  [TASTE_LEVEL.쓰읍]: spicylevel_1,
  [TASTE_LEVEL.씁하]: spicylevel_2,
  [TASTE_LEVEL.헥헥]: spicylevel_3,
};

const Navigator = () => {
  const router = useRouter();
  const handleNavigate = (level: TASTE_LEVEL) => () => {
    router.push(`${ROUTES.CATEGORY}/${level}`);
  };

  return (
    <Container>
      {Object.values(TASTE_LEVEL).map((level) => (
        <div onClick={handleNavigate(level)} key={level}>
          <Image src={iconByLevel[level]} alt={level} />
          <p>{level}</p>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;

  & div {
    display: flex;
    flex-direction: column;
    margin: 0 6px;
    cursor: pointer;

    & p {
      font-size: 13px;
      font-weight: 700;
      margin-top: 8px;
      color: ${({ theme }) => theme.colors.grey10};
    }
  }
`;

export default Navigator;
