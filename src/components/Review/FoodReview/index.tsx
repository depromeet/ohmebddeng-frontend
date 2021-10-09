import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { SpicyLevelInput, TasteTagInput } from '@/components/Common';
import useInput from '@/hooks/useInput';
import { LEVEL, TASTE, ReviewValue } from '@/types';

interface Props {
  name: string;
}

const FoodReview = ({ name }: Props, ref: React.Ref<ReviewValue>) => {
  const [levelValue, levelValueChangeHandler] = useInput();
  const [tasteValues, setTasteValues] = useState<Set<TASTE>>(new Set());

  const tasteValueChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = (event.target as HTMLInputElement).value as TASTE;
    tasteValues.has(target)
      ? setTasteValues(
          (prev) => new Set(Array.from(prev).filter((v) => v !== target))
        )
      : setTasteValues((prev) => new Set(prev.add(target)));
  };

  useImperativeHandle(
    ref,
    () => ({ levelValue, tasteValue: Array.from(tasteValues) }),
    [levelValue, tasteValues]
  );

  return (
    <section>
      <h2>{name}</h2>
      <form id="spicyLevelForm">
        {Object.values(LEVEL).map((name) => (
          <SpicyLevelInput
            key={name}
            name={name}
            onChange={levelValueChangeHandler}
            checked={levelValue === name}
          />
        ))}
      </form>
      <form id="tasteForm">
        {Object.values(TASTE).map((name) => (
          <TasteTagInput
            key={name}
            name={name}
            onChange={tasteValueChangeHandler}
            checked={tasteValues.has(name)}
          />
        ))}
      </form>
    </section>
  );
};

export default forwardRef(FoodReview);
