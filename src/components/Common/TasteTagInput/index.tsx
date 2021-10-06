import React from 'react';
import { TASTE } from '@/types';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: TASTE;
}

const TasteTagInput = (props: Props) => {
  const { name, type, ...rest } = props;
  return (
    <div>
      <input type={type ?? 'checkbox'} name={name} value={name} {...rest} />
      <label htmlFor={name}>#{name}</label>
    </div>
  );
};

export default TasteTagInput;
