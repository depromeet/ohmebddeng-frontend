import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const CategoryByTaste: NextPage = () => {
  const router = useRouter();
  const { level } = router.query;
  return <div>{level} 카테고리 페이지</div>;
};

export default CategoryByTaste;
