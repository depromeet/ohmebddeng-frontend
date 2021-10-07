import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children?: React.ReactNode;
}
// TODO : Header 컴포넌트 추가
const Layout = ({ children }: Props) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  width: 350px;
  & h1 {
    font-weight: normal;
    font-size: 17px;
  }
  & h2 {
    font-family: SB AggroOTF;
    font-weight: normal;
    font-size: 22px;
  }
  @media (max-width: 350px) {
    width: 100%;
  }
`;

export default Layout;
