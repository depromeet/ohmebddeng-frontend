import { css, useTheme } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { getLevelTestFoodsQuery, LevelTestFoods } from '@/api/levelTest';
import TitleBar from '@/components/Common/TitleBar';
import { SpicyLevelForm } from '@/components/Review';
import { ROUTES } from '@/constants';
import { LEVEL } from '@/types';

export default function LevelTestPage() {
  const router = useRouter();
  const step = parseInt(router.query.step as string);
  const index = step - 1;
  const theme = useTheme();
  const [level, setLevel] = useState<LEVEL | undefined>(undefined);
  const { data } = useQuery<LevelTestFoods>(['levelTestFoods', size], () =>
    getLevelTestFoodsQuery(size)
  );

  const handleChangeLevel = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLevel(e.target.value as LEVEL);
      if (data && step < data?.data.foodList.length) {
        setTimeout(() => {
          router.push(`${ROUTES.LEVEL_TEST}/${step + 1}`);
          setLevel(undefined);
        }, 500);
      }
    },
    [data, router, step]
  );

  return (
    <div>
      {
        data?.data.foodList.map((food) => (
          <div key={food.id}>
            <TitleBar backButton={false}>
              맵레벨 테스트 ({step}/{data.data.foodList.length})
            </TitleBar>
            <div
              css={css`
                width: 100%;
                height: 2px;
                background-color: ${theme.colors.grey10};
              `}
            >
              <div
                css={css`
                  width: ${(100 / data.data.foodList.length) * step}%;
                  height: 100%;
                  background-color: ${theme.colors.red};
                `}
              />
            </div>

            <div
              css={css`
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 14px;
                padding: 24px 26px;
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
              <SpicyLevelForm level={level} onChange={handleChangeLevel} />
            </div>
          </div>
        ))[index]
      }
    </div>
  );
}

const size = 12;
