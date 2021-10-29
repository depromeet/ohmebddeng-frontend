import { css, useTheme } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import {
  getLevelTestFoodsQuery,
  LevelTestFoods,
  postLevelTestQuery,
} from '@/api/levelTest';
import { AnonymousUser, getAnonymousUserQuery } from '@/api/user';
import { Header, SpicyLevelSection } from '@/components/Common';
import FoodOverview from '@/components/Common/FoodOverview';
import { ROUTES } from '@/constants';
import { LEVEL } from '@/types';

export default function LevelTestPage() {
  const theme = useTheme();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const index = useMemo(() => step - 1, [step]);
  const [level, setLevel] = useState<LEVEL | undefined>(undefined);
  const [result, setResult] = useState<{ [foodId: string]: LEVEL }>({});
  const [testIsDone, setTestIsDone] = useState(false);
  const { data: foods } = useQuery<LevelTestFoods>(
    ['levelTestFoods', size],
    () => getLevelTestFoodsQuery(size)
  );

  const goToNextStep = useCallback(
    (foodId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const timeToDelay = 0.5 * 1000;
      const selectedLevel = e.target.value as LEVEL;
      setLevel(selectedLevel);
      setResult({ ...result, [foodId]: selectedLevel });

      if (foods && step < foods?.data.foodList.length) {
        setTimeout(() => {
          setLevel(undefined);
          setStep((step) => step + 1);
        }, timeToDelay);

        return;
      }

      setTestIsDone(true);
    },
    [result, foods, step]
  );

  const { data: user } = useQuery<AnonymousUser>(
    ['anonymousUser'],
    getAnonymousUserQuery,
    { enabled: testIsDone, onSuccess: () => mutation.mutate(result) }
  );

  const mutation = useMutation(postLevelTestQuery, {
    onSuccess: () => router.push(ROUTES.REVIEW),
  });

  return (
    <div>
      {
        foods?.data.foodList.map((food) => (
          <div key={food.id}>
            <Header type="center">
              맵레벨 테스트 ({step}/{foods.data.foodList.length})
            </Header>
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
                  width: ${(100 / foods.data.foodList.length) * step}%;
                  height: 100%;
                  background-color: ${theme.colors.red};
                `}
              />
            </div>
            <FoodOverview {...food} />
            <SpicyLevelSection
              level={level}
              onChange={goToNextStep(food.id)}
              disabled={!!level}
            />
          </div>
        ))[index]
      }
    </div>
  );
}

const size = 12;
