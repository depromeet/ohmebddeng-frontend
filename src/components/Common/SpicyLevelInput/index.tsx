import styled from '@emotion/styled';
import React from 'react';
import { LEVEL } from '@/types';
import { SpicyLevelIcon } from '..';

interface SpicyLevelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: LEVEL;
  checked: boolean;
}

const SpicyLevelInput = (props: SpicyLevelInputProps) => {
  const { name, type, checked, ...rest } = props;
  return (
    <Label>
      <input type={type ?? 'radio'} value={name} checked={checked} {...rest} />
      <SpicyLevelIcon level={name} checked={checked} />
      <div className={'name' + (checked ? '' : ' disabled')}>{name}</div>
    </Label>
  );
};

const Label = styled.label`
  & input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  & div {
    display: block !important;
    cursor: pointer;
  }
  & div.name {
    margin-top: 12px;
  }
  & div.disabled {
    color: ${({ theme }) => theme.colors.grey10};
  }
`;

export default SpicyLevelInput;
