import React, { useState, useEffect } from 'react';

const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState<string>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = (event.target as HTMLInputElement).value;
    setValue(target);
  };

  return [value, handleChangeValue, setValue] as const;
};

export default useInput;
