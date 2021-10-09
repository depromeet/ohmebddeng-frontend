import styled from '@emotion/styled';
import React from 'react';

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
  width: 414px;
  & h1 {
    font-weight: normal;
    font-size: 17px;
  }
  & h2 {
    font-family: SBAggroB;
    font-weight: normal;
    font-size: 22px;
  }
  @media (max-width: 350px) {
    width: 100%;
  }
`;

export default Layout;
