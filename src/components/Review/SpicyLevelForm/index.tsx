import React from 'react';
import styled from '@emotion/styled';
import { SpicyLevelInput } from '@/components/Common';
import { LEVEL } from '@/types';

interface Props {
  level?: LEVEL;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpicyLevelForm = ({ level, ...props }: Props) => {
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
