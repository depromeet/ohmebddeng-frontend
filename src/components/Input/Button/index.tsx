import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'markdown-to-jsx/node_modules/@types/react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonType: 'contained' | 'outline';
  color: 'green' | 'red' | 'grey';
  rounded: boolean;
  children?: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 20px;
  color: white;
  background: transparent;

  font-weight: bold;
  font-size: 15px;
  line-height: 140%;

  text-align: center;
  letter-spacing: 1.66667px;

  border: none;
  outline: none;
  cursor: pointer;

  ${({ buttonType, color }) =>
    buttonType === 'contained' &&
    css`
      color: ${color === 'green' ? '#131313' : 'white'};
      background: ${getColor(color)};
    `}

  ${({ buttonType, color }) =>
    buttonType === 'outline' &&
    css`
      border: 1px solid ${getColor(color)};
      :hover {
        color: ${color === 'green' ? '#131313' : 'white'};
        background-color: ${getColor(color)};
      }
    `}

    ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 100px;
    `}
`;

const getColor = (color: string) => {
  return color === 'green'
    ? '#69ff7a'
    : color === 'red'
    ? '#FF5252'
    : '#8E8E93';
};
