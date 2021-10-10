import React from 'react';
import styled from '@emotion/styled';
import { TasteTagInput } from '@/components/Common';
import { TASTE } from '@/types';

interface Props {
  taste?: Set<TASTE>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TasteForm = ({ taste, ...props }: Props) => {
  return (
    <Form id="spicyLevelForm">
      {Object.values(TASTE).map((name) => (
        <TasteTagInput
          key={name}
          name={name}
          checked={taste && taste.has(name)}
          {...props}
        />
      ))}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 9px 12px;
  padding-top: 20px;
  border-top: 1px solid #3a3a3c;
`;

export default TasteForm;
