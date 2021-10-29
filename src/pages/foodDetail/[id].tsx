import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { Header } from '@/components/Common';
import { SpicyEvaluation, TasteEvaluation } from '@/components/FoodDetail';
import { TASTE_LEVEL, USER_LEVEL, TASTE } from '@/types';
import arrow_under from 'public/assets/common/arrow_under.svg';

const data = {
  tasteLevel: [
    { level: TASTE_LEVEL.냠냠, count: 5 },
    { level: TASTE_LEVEL.쓰읍, count: 3 },
    { level: TASTE_LEVEL.씁하, count: 7 },
    { level: TASTE_LEVEL.헥헥, count: 2 },
  ],
  taste: [
    { taste: TASTE.매콤달콤한, count: 5 },
    { taste: TASTE.개운한, count: 3 },
    { taste: TASTE.칼칼한, count: 7 },
    { taste: TASTE.얼큰한, count: 2 },
    { taste: TASTE.얼얼한, count: 7 },
    { taste: TASTE.알싸한, count: 10 },
  ],
};

const FoodDetail: NextPage = () => {
  const router = useRouter();
  const foodId = router.query.id as string;
  const dropwdownRef = useRef<HTMLUListElement>(null);
  const [selectedLevel, setSelectedLevel] = useState<USER_LEVEL>(
    USER_LEVEL.맵마스터
  );

  useEffect(() => {
    if (dropwdownRef.current?.style)
      dropwdownRef.current.style.display = 'none';
  }, []);

  const handleSelectLevel = (level: USER_LEVEL) => () => {
    setSelectedLevel(level);
    // 서버로 요청 보내서, 새로운 데이터를 받아온다.
    handleToggleDropDown();
  };

  const handleToggleDropDown = () => {
    dropwdownRef.current?.style &&
      (dropwdownRef.current?.style.display === 'none'
        ? (dropwdownRef.current.style.display = 'block')
        : (dropwdownRef.current.style.display = 'none'));
  };

  return (
    <>
      <Header type="center">
        <span>불닭볶음면 까르보나라맛</span>
      </Header>
      <Container>
        {/* <FoodOverview
          image_url={`https://cdn.ohmebddeng.kr/foods/ramyeon.png`}
          id="불닭볶음면"
          name="불닭볶음면"
          nameVisable={false}
        /> */}
        <UserLevelContainer>
          <p>{selectedLevel}들의 평가</p>
          <div>
            <DropDownBtn onClick={handleToggleDropDown}>
              <span>{selectedLevel}</span>
              <Image src={arrow_under} alt="arrow" />
            </DropDownBtn>
            <DropDownContent ref={dropwdownRef}>
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
        <SpicyEvaluation testData={data.tasteLevel} totalCount={17} />
        <TasteEvaluation testData={data.taste} foodId={foodId} />
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

const DropDownContent = styled.ul`
  position: absolute;
  z-index: 1;
  display: none;
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
