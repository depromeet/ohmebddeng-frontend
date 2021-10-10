import styled from '@emotion/styled';
import React from 'react';
import { LEVEL } from '@/types';
import { SpicyLevelIcon } from '..';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: LEVEL;
  checked: boolean;
}

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
    color: #8e8e93;
  }
`;

const SpicyLevelInput = (props: Props) => {
  const { name, type, checked, ...rest } = props;

  return (
    <Label>
      <input type={type ?? 'radio'} value={name} checked={checked} {...rest} />
      <SpicyLevelIcon level={name} checked={checked} />
      <div className={'name' + (checked ? '' : ' disabled')}>{name}</div>
    </Label>
  );
};

export default SpicyLevelInput;
