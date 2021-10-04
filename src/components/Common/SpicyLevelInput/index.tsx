import React from 'react';
import { SpicyLevelIcon } from '..';
import { LEVEL } from '@/types';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: LEVEL;
}

const SpicyLevelInput = ({ name, onChange, checked }: Props) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        value={name}
        onChange={onChange}
        checked={checked}
      />
      <SpicyLevelIcon level={name} />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default SpicyLevelInput;
