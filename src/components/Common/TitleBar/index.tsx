import styled from '@emotion/styled';
import { HTMLAttributes } from 'markdown-to-jsx/node_modules/@types/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import arrow_back from 'public/assets/common/arrow_back.svg';

export interface TitleBarProps extends HTMLAttributes<HTMLDivElement> {
  backButton: boolean;
  backLocation?: string;
  children?: React.ReactNode;
}

export default function TitleBar({ children, ...props }: TitleBarProps) {
  const { backButton, backLocation = '/' } = props;
  const router = useRouter();
  const moveLocation = () => router.push(backLocation);

  return (
    <Container {...props}>
      {backButton && (
        <Image onClick={moveLocation} src={arrow_back} alt={arrow_back} />
      )}
      <h1>{children}</h1>
    </Container>
  );
}

const Container = styled.div<TitleBarProps>`
  height: 56px;
  padding: 17px 0 15px;
  position: relative;
  & div {
    cursor: pointer;
    float: left;
  }
  & h1 {
    position: absolute;
    top: 17px;
    left: 30px;
    right: 30px;
    margin-left: auto;
    margin-right: auto;
    line-height: 140%;
  }
`;
