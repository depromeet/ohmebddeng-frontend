import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

export interface ItemProps {
  height?: number;
}

export interface CategoryProps extends ItemProps {
  title: string;
  contents: {
    textFirst: string;
    textSecond?: string;
    image: string;
    color: string;
  }[];
}
const Category = ({ title, contents, ...props }: CategoryProps) => {
  return (
    <div>
      <Title>{title}</Title>
      <Content>
        {contents.map((content) => (
          <Item key={content.textFirst} color={content.color} {...props}>
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
