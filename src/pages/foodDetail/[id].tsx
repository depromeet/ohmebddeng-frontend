import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {
  getFoodDetail,
  getFoodCountsQuery,
  FoodCounts,
  FoodDetails,
} from '@/api/foodDetail';
import { Header, FoodOverview } from '@/components/Common';
import { SpicyEvaluation, TasteEvaluation } from '@/components/FoodDetail';
import { USER_LEVEL } from '@/types';
import arrow_under from 'public/assets/common/arrow_under.svg';

const FoodDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isDropDownOpend, setIsDropDownOpend] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<USER_LEVEL>(
    USER_LEVEL.맵마스터
  );

  const { data: counts } = useQuery<FoodCounts>(
    ['FoodCounts', id, selectedLevel],
    () => getFoodCountsQuery(id as string, selectedLevel)
  );

  const { data: food } = useQuery<FoodDetails>(['FoodDetails', id], () =>
    getFoodDetail(id as string)
  );

  useEffect(() => {
    console.log(isDropDownOpend);
  }, [isDropDownOpend]);

  const handleSelectLevel = (level: USER_LEVEL) => () => {
    setSelectedLevel(level);
    setIsDropDownOpend(false);
  };

  return (
    <>
      {food?.data && (
        <>
          <Header type="center">
            <span>
              {food.data.name}
              {'  '}
              {food.data.subName}
            </span>
          </Header>
          <Container>
            <FoodOverview
              imageUrl={food.data.imageUrl}
              id={food.data.name}
              name={food.data.name}
              subName={food.data.subName}
              nameVisable={false}
            />
            <UserLevelContainer>
              <p>{selectedLevel}들의 평가</p>
              <div>
                <DropDownBtn
                  onClick={() => setIsDropDownOpend(!isDropDownOpend)}
                >
                  <span>{selectedLevel}</span>
                  <Image src={arrow_under} alt="arrow" />
                </DropDownBtn>
                <DropDownContent isOpend={isDropDownOpend}>
                  {Object.values(USER_LEVEL).map((level) => {
                    if (selectedLevel !== level)
                      return (
                        <li key={level} onClick={handleSelectLevel(level)}>
                          {level}
                        </li>
                      );
                  })}
                </DropDownContent>
              </div>
            </UserLevelContainer>
            {counts?.data && (
              <>
                <SpicyEvaluation
                  countData={counts.data.hotLevelCount}
                  totalCount={counts.data.totalHotLevelCount}
                />
                <TasteEvaluation
                  countData={counts.data.tasteTagCount}
                  totalCount={counts.data.totalTasteTagCount}
                />
              </>
            )}
          </Container>
        </>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserLevelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  margin-bottom: 8px;

  & p {
    font-size: 17px;
  }
`;

const DropDownContent = styled.ul<{ isOpend: boolean }>`
  display: ${(props) => (props.isOpend ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  background-color: #1f1f1f;
  padding: 10px;

  & li {
    cursor: pointer;
  }
`;

const DropDownBtn = styled.button`
  color: ${({ theme }) => theme.colors.grey0};
  border: none;
  background-color: transparent;
  cursor: pointer;

  & span {
    font-size: 13px;
    margin-right: 8px;
  }
`;

export default FoodDetail;
