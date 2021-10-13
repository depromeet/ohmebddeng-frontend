import styled from '@emotion/styled';
import React from 'react';
import { TasteTagInput } from '@/components/Common';
import { TASTE } from '@/types';

export interface TasteFormProps {
  taste?: Set<TASTE>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TasteForm = ({ taste, ...props }: TasteFormProps) => {
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
  border-top: ${({ theme }) => `1px solid ${theme.colors.grey40}`};
`;

export default TasteForm;
