import styled from '@emotion/styled';
import React from 'react';

interface HeaderProps {
  type: 'center' | 'side';
  children: React.ReactNode;
}

const Header = ({ type, children }: HeaderProps) => {
  const headerType = {
    center: <CenterContainer>{children}</CenterContainer>,
    side: <SideContainer>{children}</SideContainer>,
  };
  return headerType[type] ?? null;
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
