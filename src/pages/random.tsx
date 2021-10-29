import styled from '@emotion/styled';
import type { NextPage } from 'next';
import router from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getRandomFood, RandomFoodType } from '@/api/random';
import { Header } from '@/components/Common';
import Button from '@/components/Input/Button';
import { ROUTES } from '@/constants';

const TestResult: NextPage = () => {
  const [reRender, setReRender] = useState<number>(0);
  const { status, data } = useQuery<RandomFoodType>(
    ['getUserCount', reRender],
    getRandomFood
  );

  const goHome = () => {
    router.push(ROUTES.HOME);
  };

  const reRecommand = () => {
    setReRender((number: number) => number + 1);
  };

  return (
    <>
      <Header type="center">
        <span>오늘의 랜덤 추천</span>
      </Header>
      <Container>
        {status !== 'loading' ? (
          <div className="random__content">
            <div className="random__content__image-box">
              {data && <img src={data?.imageUrl} alt="error" />}
            </div>
            <div className="random__content__text">
              <h2>{data && data.name}</h2>
              <h2 className="random__content__text__sub">
                {data && data.subName}
              </h2>
            </div>
          </div>
        ) : (
          <div>로딩중</div>
        )}

        <div className="random__buttons">
          <Button
            buttonType="outline"
            color="green"
            rounded
            fullWidth
            onClick={reRecommand}
          >
            다시 추천받기
          </Button>
          <Button
            fullWidth
            buttonType="outline"
            color="red"
            rounded
            onClick={goHome}
          >
            <div className="test-result__buttons__center">홈으로</div>
          </Button>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  .random {
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 76px;

      &__image-box {
        width: 40%;
        img {
          width: 100%;
        }
      }
      &__text {
        h2 {
          margin-top: 20px;
          font-size: 32px;
          font-weight: 400;
        }

        &__sub {
          margin-top: 30px;
          font-size: 26px;
        }
      }
    }
    &__buttons {
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 66px;
      button + button {
        margin-top: 16px;
      }
    }
  }
`;
export default TestResult;
