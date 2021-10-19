import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

export interface ItemProps {
  height?: number;
}

export interface CategoryProps extends ItemProps {
  title: string;
  contants: {
    textFirst: string;
    textSecond?: string;
    image: any;
    color: string;
  }[];
}

const Category = ({ title, contants, ...props }: CategoryProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        {contants.map((contant) => (
          <Item key={contant.textFirst} color={contant.color} {...props}>
            <ItemContent>
              <Image
                src={contant.image}
                alt={`${contant.textFirst}${
                  contant.textSecond ? ` ${contant.textSecond}` : ``
                }`}
              />
              <br />
              {contant.textFirst}
              {contant.textSecond && (
                <>
                  <br />
                  {contant.textSecond}
                </>
              )}
            </ItemContent>
          </Item>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div``;
const Title = styled.div`
  margin: 8.5px;
  text-align: left;
  font-size: 20px;
  line-height: 140%;
`;
const Content = styled.div`
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

export default Category;
