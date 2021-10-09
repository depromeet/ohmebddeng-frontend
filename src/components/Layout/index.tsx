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
  width: 100vw;
  max-width: 414px;
  height: 100%;

  & h1 {
    font-weight: normal;
    font-size: 17px;
  }
  & h2 {
    font-family: SBAggroB;
    font-weight: normal;
    font-size: 22px;
  }
`;

export default Layout;
