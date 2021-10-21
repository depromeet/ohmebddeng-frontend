import styled from '@emotion/styled';
import React from 'react';
import Header from './header';

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export default Layout;
