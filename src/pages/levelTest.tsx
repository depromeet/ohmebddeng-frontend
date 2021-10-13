import { useQuery } from 'react-query';
import { getLevelTestFoodsQuery, LevelTestFoods } from '@/api/levelTest';

export default function LevelTestPage() {
  const { data } = useQuery<LevelTestFoods>(['levelTestFoods', size], () =>
    getLevelTestFoodsQuery(size)
  );

  return <div></div>;
}

const size = 12;
