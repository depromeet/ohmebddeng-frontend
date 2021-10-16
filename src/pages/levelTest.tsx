import React, {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import { getLevelTestFoodsQuery, LevelTestFoods } from '@/api/levelTest';
import TitleBar from '@/components/Common/TitleBar';
import { SpicyLevelForm } from '@/components/Review';
import { LEVEL } from '@/types';

export default function LevelTestPage() {
  const [level, setLevel] = useState<LEVEL | undefined>(undefined);
  const { data } = useQuery<LevelTestFoods>(['levelTestFoods', size], () =>
    getLevelTestFoodsQuery(size)
  );

  const handleChangeLevel = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLevel(e.target.value as LEVEL);
    },
    []
  );

  return (
    <div>
      <TitleBar backButton={false}>당신의 매운 느낌을 표현해주세요</TitleBar>

      <SpicyLevelForm level={level} onChange={handleChangeLevel} />
    </div>
  );
}

const size = 12;
