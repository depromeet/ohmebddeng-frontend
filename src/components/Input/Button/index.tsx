import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'markdown-to-jsx/node_modules/@types/react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonType: 'contained' | 'outline' | 'tertiary';
  color: 'green' | 'red' | 'grey';
  rounded: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>children</StyledButton>;
};

const StyledButton = styled.button<ButtonProps>`
  padding: 20px;
  display: flex;
  justify-content: 'center';
  align-items: 'center';
  color: white;
  background: transparent;

  font-family: NanumSquareOTF;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;

  text-align: center;
  letter-spacing: 1.66667px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;

  border: none;
  outline: none;

  ${({ buttonType, color }) =>
    buttonType === 'contained' &&
    css`
      background: ${getColor(color)};
    `}

  ${({ buttonType, color }) =>
    buttonType === 'outline' &&
    css`
      border: 1px solid ${getColor(color)};
    `}

    ${({ buttonType, color }) =>
    buttonType === 'tertiary' &&
    css`
      background: ${getColor(color)};
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

export default Button;
