import React from 'react';
import { SpicyLevelIcon } from '..';
import { LEVEL } from '@/types';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: LEVEL;
}

const SpicyLevelInput = (props: Props) => {
  const { name, type, ...rest } = props;
  return (
    <div>
      <input type={type ?? 'radio'} value={name} {...rest} />
      <SpicyLevelIcon level={name} />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default SpicyLevelInput;
