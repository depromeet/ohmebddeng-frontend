import styled from '@emotion/styled';
import React from 'react';
import { TASTE } from '@/types';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: TASTE;
}

const TasteTagInput = (props: Props) => {
  const { name, type, checked, ...rest } = props;
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
  background-color: ${({ checked }) => (checked ? '#FF5252' : '#3A3A3C')};
  color: ${({ checked }) => (checked ? '#F5F5F5' : '#8E8E93')};
  padding: 12px 18px 11px;
  text-align: center;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

export default TasteTagInput;
