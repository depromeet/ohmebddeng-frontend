import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Header, FoodOverview } from '@/components/Common';
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
    <>
      <Header type="center">
        <span>불닭볶음면 까르보나라맛</span>
      </Header>
      <Container>
        <FoodOverview
          image_url={`https://cdn.ohmebddeng.kr/foods/ramyeon.png`}
          id="불닭볶음면"
          name="불닭볶음면"
          nameVisable={false}
        />
        {/** TODO: FoodOverview 컴포넌트 삽입 */}
        <SpicyEvaluation testData={data} totalCount={17} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default FoodDetail;
