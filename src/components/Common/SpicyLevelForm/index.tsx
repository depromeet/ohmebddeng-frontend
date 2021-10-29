import styled from '@emotion/styled';
import React from 'react';
import { SpicyLevelInput } from '@/components/Common';
import { HOT_LEVEL_SERVER, HOT_LEVEL_CLIENT } from '@/types';

export interface SpicyLevelFormProps {
  level?: HOT_LEVEL_SERVER;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const SpicyLevelForm = ({ level, ...props }: SpicyLevelFormProps) => {
  return (
    <Form id="spicyLevelForm">
      {Object.values(HOT_LEVEL_CLIENT).map((name) => (
        <SpicyLevelInput
          key={name}
          name={name}
          checked={level === HOT_LEVEL_SERVER[name]}
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
