import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'markdown-to-jsx/node_modules/@types/react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonType: 'contained' | 'outline';
  color: 'green' | 'red' | 'grey';
  rounded: boolean;
  marginTop?: number;
  fullWidth?: boolean;
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
  width: ${({ fullWidth = false }) => (fullWidth ? '100%' : 'auto')};

  ${({ buttonType, color, theme }) =>
    buttonType === 'contained' &&
    css`
      color: ${color === 'green' ? theme.colors.black : theme.colors.white};
      background: ${getColor(color, theme)};
    `}
  ${({ buttonType, color, theme }) =>
    buttonType === 'outline' &&
    css`
      border: 1px solid ${getColor(color, theme)};
      :hover {
        color: ${color === 'green' ? theme.colors.black : theme.colors.white};
        background-color: ${getColor(color, theme)};
      }
    `}
  ${({ rounded = false }) =>
    rounded &&
    css`
      border-radius: 100px;
    `};
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop}px;
    `}
`;

const getColor = (color: string, theme: Theme) => {
  return color === 'green'
    ? theme.colors.green
    : color === 'red'
    ? theme.colors.red
    : theme.colors.grey10;
};
