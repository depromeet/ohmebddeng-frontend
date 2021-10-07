import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;

  background-color: black;
  font-family: NanumSquareOTF;
  text-align: center;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 140%;
  letter-spacing: 1.66667px;
  & h1 {
    font-weight: normal;
    font-size: 17px;
  }
  & h2 {
    font-family: SB AggroOTF;
    font-weight: normal;
    font-size: 22px;
  }
`;

export default Layout;
