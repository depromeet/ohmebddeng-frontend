import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { USER_LEVEL, LEVEL } from '@/types';
import level_0 from 'public/assets/Main/level0.svg';
import level_1 from 'public/assets/Main/level1.svg';
import level_2 from 'public/assets/Main/level2.svg';
import level_3 from 'public/assets/Main/level3.svg';
import level_4 from 'public/assets/Main/level4.svg';
import spicylevel_0 from 'public/assets/Main/spicy-level-0.svg';
import spicylevel_1 from 'public/assets/Main/spicy-level-1.svg';
import spicylevel_2 from 'public/assets/Main/spicy-level-2.svg';
import spicylevel_3 from 'public/assets/Main/spicy-level-3.svg';

export interface ProfileCardProps {
  level: USER_LEVEL;
}

const levelByImage = {
  맵찔이: level_0,
  맵초보: level_1,
  맵러버: level_2,
  맵마스터: level_3,
  맵부심: level_4,
};

const ProfileCard = ({ level }: ProfileCardProps) => {
  return (
    <Container>
      <Image src={levelByImage[level]} alt={level} layout="fixed" />
      <Title>
        {level}님 <br />
        오늘은 무엇이 땡기십니까!
      </Title>
      <SpicyLevelContainer>
        <div>
          <Image src={spicylevel_0} alt={LEVEL.냠냠} />
          <p>{LEVEL.냠냠}</p>
        </div>
        <div>
          <Image src={spicylevel_1} alt={LEVEL.쓰읍} />
          <p>{LEVEL.쓰읍}</p>
        </div>
        <div>
          <Image src={spicylevel_2} alt={LEVEL.씁하} />
          <p>{LEVEL.씁하}</p>
        </div>
        <div>
          <Image src={spicylevel_3} alt={LEVEL.헥헥} />
          <p>{LEVEL.헥헥}</p>
        </div>
      </SpicyLevelContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 456px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
`;

const Title = styled.p`
  font-size: 20px;
  font-family: SBAggroB;
  line-height: 28px;
`;

const SpicyLevelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;

  & div {
    display: flex;
    flex-direction: column;
    margin: 0 6px;

    & p {
      font-size: 13px;
      font-weight: 700;
      margin-top: 8px;
      color: ${({ theme }) => theme.colors.grey10};
    }
  }
`;

export default ProfileCard;
