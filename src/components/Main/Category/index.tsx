import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import router from 'next/router';
import React from 'react';
import Button from '@/components/Input/Button';
import { ROUTES } from '@/constants';

export interface ItemProps {
  height?: number;
}

export interface CategoryProps extends ItemProps {
  disabled?: boolean;
  title: string;
  contents: {
    textFirst: string;
    textSecond?: string;
    image: string;
    color: string;
  }[];
}
const Category = ({
  disabled = false,
  title,
  contents,
  ...props
}: CategoryProps) => {
  const goHome = () => {
    router.push(ROUTES.HOME);
  };

  return (
    <div>
      <Title>{title}</Title>
      <Content>
        {contents.map((content, index) => (
          <Item
            key={`${content.textFirst}${index}`}
            color={content.color}
            {...props}
          >
            <ItemContent>
              <Image
                src={content.image}
                alt={`${content.textFirst}${
                  content.textSecond ? ` ${content.textSecond}` : ``
                }`}
              />
              <br />
              {content.textFirst}
              {content.textSecond && (
                <>
                  <br />
                  {content.textSecond}
                </>
              )}
            </ItemContent>
          </Item>
        ))}
        {disabled && (
          <>
            <DisabledBackGround></DisabledBackGround>
            <Disabled>
              <Text>레벨테스트 받으면 맞춤형 음식 추천이!</Text>
              <Button
                buttonType="contained"
                color="red"
                rounded
                onClick={goHome}
                dense
              >
                맵레벨 테스트하러가기
              </Button>
            </Disabled>
          </>
        )}
      </Content>
    </div>
  );
};

const Title = styled.div`
  margin: 8.5px;
  text-align: left;
  font-size: 20px;
  line-height: 140%;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div<ItemProps>`
  cursor: pointer;
  margin: 4.5px;
  position: relative;
  border-radius: 14px;
  width: 50%;
  flex: 1 1 40%;
  :after {
    content: '';
    display: block;
    ${({ height = false }) =>
      !height &&
      css`
        padding-bottom: 100%;
      `}
  }
  ${({ height = false }) =>
    height &&
    css`
      height: ${height}px;
    `}
  ${({ color }) =>
    css`
      background-color: ${color};
    `};
`;

const ItemContent = styled.div`
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: left;
  font-size: 15px;
  line-height: 140%;
`;

const DisabledBackGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #1f1f1f 74.35%,
    rgba(31, 31, 31, 0.82) 96.32%
  );
  transform: rotate(-180deg);
`;
const Disabled = styled.div`
  position: absolute;
  width: 100%;
  height: 150px;
  padding-top: 59px;
`;

const Text = styled.h3`
  margin: 20px 0;
`;

export default Category;
