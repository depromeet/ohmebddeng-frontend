import { css } from '@emotion/react';
import React from 'react';
import { SpicyLevelForm } from '@/components/Common';
import theme from '@/styles/theme';
import { LEVEL } from '@/types';

export interface SpicyLevelSectionProps {
  level?: LEVEL;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const SpicyLevelSection = ({ level, ...props }: SpicyLevelSectionProps) => {
  return (
    <section
      css={css`
        margin: 0 16px;
        padding: 24px 26px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 14px;
      `}
    >
      <h3
        css={css`
          margin-bottom: 26px;
          font-weight: 800;
          font-size: 17px;
          color: ${theme.colors.white};
        `}
      >
        얼마나 맵게 느껴지나요?
      </h3>
      <SpicyLevelForm level={level} disabled={!!level} {...props} />
    </section>
  );
};
export default SpicyLevelSection;
