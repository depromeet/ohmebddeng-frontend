import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const FoodDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id} 음식 상세 페이지</div>;
};

export default FoodDetail;
