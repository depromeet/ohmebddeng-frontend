import styled from '@emotion/styled';
import React from 'react';
import { TASTE } from '@/types';

export interface TasteTagInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: TASTE;
}

const TasteTagInput = ({
  name,
  type,
  checked,
  ...rest
}: TasteTagInputProps) => {
  return (
    <Container checked={checked}>
      <Input type={type ?? 'checkbox'} name={name} value={name} {...rest} />#{' '}
      {name}
    </Container>
  );
};

const Container = styled.label<{ checked?: boolean }>`
  display: inline-block;
  border-radius: 24px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.red : theme.colors.grey40};
  color: ${({ checked, theme }) =>
    checked ? theme.colors.grey0 : theme.colors.grey10};
  padding: 12px 18px 11px;
  text-align: center;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

export default TasteTagInput;
