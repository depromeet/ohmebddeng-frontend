import { css, useTheme } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import Button from '@/components/Input/Button';
import { ROUTES } from '@/constants';
import logo from '@public/images/logo.png';
import ticketLevel5 from '@public/images/round-level-5.png';
import squareLevel5 from '@public/images/square-level-5.png';
import userLevel5 from '@public/images/user-level-5.png';

const Home: NextPage = () => {
  const router = useRouter();
  const theme = useTheme();

  const handleClickGoTest = useCallback(() => {
    router.push(ROUTES.LEVEL_TEST);
  }, [router]);

  return (
    <div
      css={css`
        position: relative;
        padding: 32px 16px 0;
        height: 100%;
        text-align: left;
        overflow: hidden;
      `}
    >
      <Image src={logo} alt="오맵땡" width={100} height={52} />
      <h1
        css={css`
          margin: 24px 0 12px 0;
          font-weight: bold;
          font-size: 17px;
          color: ${theme.colors.white};
        `}
      >
        오늘은 매운게 땡기네
      </h1>
      <p
        css={css`
          font-weight: bold;
          font-size: 13px;
          text-align: left;
          color: ${theme.colors.white};
        `}
      >
        당신의 맵레벨은?
        <br />
        맵단계 테스트로 맵레벨을 확인해보세요.
      </p>

      <div
        css={css`
          position: absolute;
          top: 200px;
          right: -72px;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 62px;
            left: 40px;
            z-index: 1;
            transform: rotate(15deg);
          `}
        >
          <Image src={squareLevel5} width={78} height={36} alt="" />
        </div>
        <Image src={userLevel5} width={332} height={308} alt="맵부심" />
        <div
          css={css`
            position: absolute;
            left: -10px;
            bottom: 36px;
            z-index: 1;
          `}
        >
          <Image src={ticketLevel5} width={60} height={60} alt="" />
        </div>
      </div>

      <div
        css={css`
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 48px;
          > * + * {
            margin-top: 16px;
          }
        `}
      >
        <Button
          buttonType="outline"
          color="red"
          rounded
          css={css`
            width: 100%;
          `}
          onClick={handleClickGoTest}
        >
          테스트 하러가기
        </Button>
        <Button
          buttonType="contained"
          color="red"
          rounded
          css={css`
            width: 100%;
          `}
        >
          로그인
        </Button>
      </div>
    </div>
  );
};

export default Home;
