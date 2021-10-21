import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { ROUTES } from '@/constants';
import drawer_navigator from 'public/assets/common/hamburger.svg';

const Header = () => {
  const router = useRouter();

  const handleClickDrawerNavigator = () => {
    // drawer navigator 클릭
  };
  const headerByPathname = {
    [ROUTES.HOME]: null,
    [ROUTES.LEVEL_TEST]: null,
    [ROUTES.MAIN]: (
      <SideContainer>
        <h2>오맵땡</h2>
        <Image
          src={drawer_navigator}
          alt="drawer_navigator"
          layout="fixed"
          onClick={handleClickDrawerNavigator}
        />
      </SideContainer>
    ),
    [ROUTES.TEST_RESULT]: (
      <CenterContainer>
        <span>당신의 레벨은?</span>
      </CenterContainer>
    ),
    [ROUTES.REVIEW]: (
      <CenterContainer>
        <span>리뷰 3개만 부탁해...</span>
      </CenterContainer>
    ),
  };
  return headerByPathname[router.pathname];
};

const CenterContainer = styled.header`
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-size: 17px;
    font-weight: 800;
    line-height: 23.8px;
  }
`;

const SideContainer = styled.header`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  & img {
    cursor: pointer;
  }
`;

export default Header;
