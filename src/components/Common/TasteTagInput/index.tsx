import React from 'react';
import { TASTE } from '@/types';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: TASTE;
}

const TasteTagInput = ({ name, onChange, checked }: Props) => {
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        value={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={name}>#{name}</label>
    </div>
  );
};

export default TasteTagInput;
