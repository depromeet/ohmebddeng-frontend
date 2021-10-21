import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import error_image from 'public/assets/Error/error.svg';

const Error = () => {
  return (
    <Container>
      <p>.... 에러가 떴네요!</p>
      <Image src={error_image} alt="error" layout="fixed" />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & p {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 48px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Error;
