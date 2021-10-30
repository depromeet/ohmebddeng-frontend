import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import type { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { getUserCount, UserCount } from '@/api/user';
import Button from '@/components/Input/Button';
import LevelTestPage from '@/components/LevelTest';
import { ROUTES } from '@/constants';
import logo from '@public/images/logo.png';
import userLevel5 from '@public/images/user-level-5.png';

export const getServerSideProps = async () => {
  const userCount = await getUserCount();

  return {
    props: { userCount },
  };
};

const Home = ({
  userCount,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const theme = useTheme();
  const [showTest, setShowTest] = useState(false);

  const handleClickDoTest = useCallback(() => {
    setShowTest(true);
  }, []);

  const handleClickSkip = useCallback(() => {
    router.push(ROUTES.MAIN);
  }, [router]);

  const { data } = useQuery<UserCount>('getUserCount', getUserCount, {
    initialData: userCount,
  });

  return (
    <>
      {showTest ? (
        <LevelTestPage />
      ) : (
        <Container>
          <Image src={logo} alt="오맵땡" width={100} height={52} />
          <div
            css={css`
              padding-left: 4px;
            `}
          >
            <h1
              css={css`
                margin: 24px 0 6px 0;
                font-weight: bold;
                font-size: 22px;
                color: ${theme.colors.white};
              `}
            >
              오늘 매운게 땡기는 당신..
            </h1>
            <p
              css={css`
                font-weight: bold;
                font-size: 15px;
                text-align: left;
                color: ${theme.colors.grey10};
              `}
            >
              당신에게 맞는 매운 음식,,추천해줄게,,
            </p>

            <SpeachBubble>{data?.count}명 참여중!</SpeachBubble>
          </div>

          <div
            css={css`
              position: relative;
              top: -24px;
              right: -116px;
            `}
          >
            <Image src={userLevel5} width={314} height={290} alt="맵부심" />
          </div>

          <div
            css={css`
              position: absolute;
              left: 16px;
              right: 16px;
              bottom: 66px;
            `}
          >
            <Button
              buttonType="contained"
              color="red"
              rounded
              css={css`
                width: 100%;
              `}
              onClick={handleClickDoTest}
            >
              내 맵레벨 알아보기
            </Button>
            <Skip onClick={handleClickSkip}>건너뛰기</Skip>
          </div>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: relative;
  padding: 32px 16px 0;
  height: 100%;
  text-align: left;
  overflow: hidden;
`;

const SpeachBubble = styled.div`
  margin-top: 30px;
  width: 190px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  background-image: url('/assets/Home/speach-bubble.png');
  background-size: contain;
  background-repeat: no-repeat;
`;

const Skip = styled.span`
  margin-top: 36px;
  width: 100%;
  display: inline-block;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export default Home;
