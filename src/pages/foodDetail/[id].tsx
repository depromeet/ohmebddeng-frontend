import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { SpicyEvaluation } from '@/components/FoodDetail';
import { TASTE_LEVEL } from '@/types';

const data = [
  { level: TASTE_LEVEL.냠냠, count: 5 },
  { level: TASTE_LEVEL.쓰읍, count: 3 },
  { level: TASTE_LEVEL.씁하, count: 7 },
  { level: TASTE_LEVEL.헥헥, count: 2 },
];

const FoodDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <SpicyEvaluation testData={data} totalCount={17} />
    </div>
  );
};

export default FoodDetail;
