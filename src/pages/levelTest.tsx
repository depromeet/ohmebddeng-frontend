import { css, useTheme } from '@emotion/react';
import { useQuery } from 'react-query';
import { getLevelTestFoodsQuery, LevelTestFoods } from '@/api/levelTest';

export default function LevelTestPage() {
  const theme = useTheme();
  const { data } = useQuery<LevelTestFoods>(['levelTestFoods', size], () =>
    getLevelTestFoodsQuery(size)
  );

  console.log(data);

  return (
    <div>
      <header
        css={css`
          font-size: 17px;
          line-height: 140%;
          text-align: center;
          color: ${theme.colors.white};
        `}
      >
        당신의 맵레벨을 알아보세요
      </header>
    </div>
  );
}

const size = 12;
