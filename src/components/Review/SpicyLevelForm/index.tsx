import styled from '@emotion/styled';
import React from 'react';
import { SpicyLevelInput } from '@/components/Common';
import { LEVEL } from '@/types';

export interface SpicyLevelFormProps {
  level?: LEVEL;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpicyLevelForm = ({ level, ...props }: SpicyLevelFormProps) => {
  return (
    <Form id="spicyLevelForm">
      {Object.values(LEVEL).map((name) => (
        <SpicyLevelInput
          key={name}
          name={name}
          checked={level === name}
          {...props}
        />
      ))}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 0 24px;
`;

export default SpicyLevelForm;
