import { css, useTheme } from '@emotion/react';
import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { getLevelTestFoodsQuery, LevelTestFoods } from '@/api/levelTest';
import TitleBar from '@/components/Common/TitleBar';
import { SpicyLevelForm } from '@/components/Review';
import { LEVEL } from '@/types';

export default function LevelTestPage() {
  const theme = useTheme();
  const [step, setStep] = useState(1);
  const index = useMemo(() => step - 1, [step]);
  const [level, setLevel] = useState<LEVEL | undefined>(undefined);
  const [result, setResult] = useState<{ [foodId: string]: LEVEL }>({});
  const { data } = useQuery<LevelTestFoods>(['levelTestFoods', size], () =>
    getLevelTestFoodsQuery(size)
  );

  const goToNextStep = useCallback(
    (foodId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedLevel = e.target.value as LEVEL;
      setLevel(selectedLevel);
      setResult({ ...result, [foodId]: selectedLevel });
      setTimeout(() => {
        setLevel(undefined);
        setStep((step) => step + 1);
      }, 500);
    },
    [result]
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
              role="progressbar"
            >
              <div
                css={css`
                  width: ${(100 / data.data.foodList.length) * index}%;
                  height: 100%;
                  background-color: ${theme.colors.red};
                `}
              />
            </div>
            <section
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 62px 54px;
              `}
            >
              <Image
                src={food.image_url}
                alt={food.name}
                width={124}
                height={170}
              />
              <h2
                css={css`
                  padding-top: 18px;
                `}
              >
                {food.name}
              </h2>
            </section>

            <section
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
              <SpicyLevelForm
                level={level}
                onChange={goToNextStep(food.id)}
                disabled={!!level}
              />
            </section>
          </div>
        ))[index]
      }
    </div>
  );
}

const size = 12;
