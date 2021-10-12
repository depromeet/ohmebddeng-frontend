import styled from '@emotion/styled';
import React from 'react';
import { LEVEL } from '@/types';
import { SpicyLevelIcon } from '..';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: LEVEL;
  checked: boolean;
}

const SpicyLevelInput = ({ name, type, checked, ...rest }: Props) => {
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
    display: block;
    cursor: pointer;
  }
  & div.name {
    margin-top: 7px;
  }
  & div.disabled {
    color: #8e8e93;
  }
`;

export default SpicyLevelInput;
