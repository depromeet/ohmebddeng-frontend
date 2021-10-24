import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Loading, Header } from '@/components/Common';
import Button from '@/components/Input/Button';
import { ROUTES } from '@/constants';
import { initMSW } from '@/lib/msw';

initMSW();

const TestResult: NextPage = () => {
  const [isResult, setIsResult] = useState<boolean>(false);
  const router = useRouter();
  // as로 강제하지 않을 방법? HOC?
  const userLevel = router.query.level as string;
  const goHome = () => {
    router.push(ROUTES.HOME);
  };

  const shareMyResult = async () => {
    if (navigator.share) {
      const title = document.title;
      const url = document.location.href;

      navigator
        .share({
          title,
          url,
        })
        .then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
      // fallback
      // 직접 폴백 다이얼로그를 만들어서 띄우는 로직 or 다른 브라우저를 사용하라는 메세지
      console.log('fallback');
    }
    const sharePromise = await window.navigator.share({
      title: document.title,
      text: 'test text',
      url: 'http://localhost:3000/testResult',
    });
    console.log(sharePromise);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsResult(true);
    }, 100);
  }, []);

  return (
    <>
      <Header type="center">
        <span>당신의 레벨은?</span>
      </Header>
      <Container>
        {isResult ? (
          <TestResultWrapper>
            <div className="test-result__image-box">
              <img
                src={`/images/lv${userLevel}.png`}
                alt={`level_${userLevel}`}
              />
            </div>
            <ResultText level={userLevel} />
            <div className="test-result__content-box">
              <h3>맵찔이 특</h3>
              <ol>
                <li>1. 떡볶이 매움</li>
                <li>2. 라면 매움</li>
                <li>3. 아구찜 매움</li>
                <li>4. 친구랑 같이 매운거 먹으면 솔직히 속쓰림</li>
                <li>5. 아무튼 난 입맛이 순수한거임</li>
              </ol>
            </div>
            <div className="test-result__content-box">
              <h3>맵찔이를 위한 음식</h3>
              <ul>
                <li>진라면 순한맛</li>
                <li>엽기떡볶이 착한맛</li>
                <li>굽네치킨 고추 바사삭</li>
              </ul>
            </div>
            <div className="test-result__buttons">
              <Button
                buttonType="outline"
                color="red"
                rounded
                fullWidth
                onClick={goHome}
              >
                홈으로
              </Button>
              <Button
                fullWidth
                buttonType="contained"
                color="red"
                rounded
                onClick={shareMyResult}
              >
                맵순위 공유하기
              </Button>
            </div>
          </TestResultWrapper>
        ) : (
          <div className="loading-box">
            <p>맵레벨을 측정 하고 있어요</p>
            <Loading />
          </div>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 0 16px;
`;

const TestResultWrapper = styled.div`
  margin-bottom: 40px;

  h1 {
    font-size: 17px;
    text-align: center;
    padding: 17px 0;
    font-weight: 800;
  }

  .test-result {
    &__image-box {
    }
    &__content-box {
      background: ${({ theme }) => theme.colors.background};
      padding: 24px 0 26px 0;
      margin-top: 20px;
      border-radius: 14px;

      h3 {
        font-size: 17px;
      }

      ol,
      ul {
        margin-top: 20px;
        li {
          text-align: left;
          display: flex;
          align-items: center;
        }
        li + li {
          margin-top: 5px;
        }
      }
    }
    &__buttons {
      margin-top: 33px;
      button + button {
        margin-top: 12px;
      }
    }
  }

  .loading-box {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 15px;
      margin-bottom: 50px;
    }
  }
`;

type ResultText = {
  level: string;
};

const ResultText = ({ level }: ResultText) => {
  const info: InfoType = levelInfo[level];
  return (
    <ResultTextWrapper>
      <h2>{info.title}</h2>
      <p>{info.content}</p>
    </ResultTextWrapper>
  );
};

const ResultTextWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid white;
  border-radius: 14px;
  padding: 32px 0 42px 0;

  h2 {
    font-size: 22px;
    font-weight: 400;
  }
  p {
    margin-top: 20px;
    font-size: 13px;
    font-weight: 700;
    white-space: pre-wrap;
  }
`;

type InfoType = {
  img: string;
  title: string;
  content: string;
};

const levelInfo: { [key: string]: InfoType } = {
  1: {
    img: '',
    title: '당신의 불타는 똥꼬',
    content:
      '다음 날 아침 화장실에서 심판을 받는다.\n심판은 고통스럽고 따갑고 뜨겁다.\n매콤함이 항문으로도 느껴지는 것만 같다..',
  },
  2: {
    img: '',
    title: '빠빠빨간맛..궁금해 허니',
    content:
      '지금 흐르는건 땀일까 콧물일까\n어질한 매운맛에 정신 못차리다가도  어느새 다시 찾는 나..\n조금 빠져버린걸지도?',
  },
  3: {
    img: '',
    title: '군침이 싹 도네',
    content: '빨간색만 보면 군침이 싹도네\n그만큼 맛있다는거지..',
  },
  4: {
    img: '',
    title: '한국인이면 매운맛이지',
    content:
      '가능한..빨간색이 보이게..!\n이제 색깔이 빨갛지 않은 요리는 맛없게 느껴진다,,',
  },
  5: {
    img: '',
    title: 'K-입맛 그자체',
    content: "매운 맛을 찢어버린 캡사이'신'  당신이 K-입맛입니다.",
  },
};

export default TestResult;
