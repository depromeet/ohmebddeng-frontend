import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Loading, Header } from '@/components/Common';
import TestResultHead from '@/components/Head/testResultHead';
import Button from '@/components/Input/Button';
import { ROUTES } from '@/constants';
import { FOOD_IMAGE } from '@/constants/image';

const TestResult: NextPage = () => {
  const [isResult, setIsResult] = useState<boolean>(false);
  const router = useRouter();
  // as로 강제하지 않을 방법? HOC?
  const userLevel = router.query.level as string;
  const info = levelInfo[userLevel];

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
      <TestResultHead level={Number(userLevel)} />
      <Header type="center">
        <span>당신의 레벨은?</span>
      </Header>
      <Container>
        {isResult ? (
          <TestResultWrapper>
            <div className="test-result__image-box">
              <img src={info.img} alt={`level_${userLevel}`} />
            </div>
            <div className="test-result__content-box outline">
              <h2>{info.title}</h2>
              <p>{info.content}</p>
            </div>
            <div className="test-result__content-box">
              <h3>{info.character.title}특</h3>
              <ol>
                {info.character.list.map((item, index) => (
                  <li key={index + 1}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="test-result__content-box">
              <h3>{info.character.title}를 위한 음식</h3>
              <ul>
                {info.for.map((item, index) => (
                  <li key={index}>
                    <div>
                      <img src={FOOD_IMAGE[item.type]} alt="food_image" />
                    </div>
                    <div>{item.name}</div>
                  </li>
                ))}
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
      margin-top: 24px;
      border-radius: 14px;

      p {
        white-space: pre-wrap;
      }

      h2 {
        font-size: 22px;
        font-weight: 400;
        margin-top: 8px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 17px;
        margin-bottom: 20px;
      }

      ol,
      ul {
        margin: 20px;
        margin-bottom: 0px;
        li {
          text-align: left;
          display: flex;
          align-items: center;

          & > div + div {
            margin-left: 17px;
          }
        }
        li + li {
          margin-top: 5px;
        }
      }
      &.outline {
        background: ${({ theme }) => theme.colors.background};
        border: 1px solid white;
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
  character: {
    title: string;
    list: string[];
  };
  for: {
    type: string;
    name: string;
  }[];
};

const levelInfo: { [key: string]: InfoType } = {
  1: {
    img: '/images/lv1.png',
    title: '당신의 불타는 똥꼬',
    content:
      '매운맛만 봐도 정수리가 뜨거워지는 당신\n한 입만 먹었을 뿐이지\n다음날 항문의 심판이 기다리고 있다',
    character: {
      title: '맵찔이',
      list: [
        '떡볶이 매움',
        '라면 매움',
        '아구찜 매움',
        '친구랑 같이 매운거 먹으면 솔직히 속쓰림',
        '아무튼 난 입맛이 순수한거임',
      ],
    },
    for: [
      {
        type: 'ramen',
        name: '진라면 순한맛',
      },
      {
        type: 'tteok',
        name: '엽기떡볶이 착한맛',
      },
      {
        type: 'chicken',
        name: '굽네치킨 고추 바사삭',
      },
    ],
  },
  2: {
    img: '/images/lv2.png',
    title: '빠빠빨간맛..궁금해 허니',
    content:
      '지금 흐르는건 땀일까 콧물일까\n어질한 매운맛에 정신 못차리다가도  어느새 다시 찾는 나..\n조금 빠져버린걸지도?',
    character: {
      title: '맵초보',
      list: [
        '솔직히 매운거 잘먹진 않음',
        '근데 먹고싶음',
        '쿨피스 필수. 콧물은 옵션',
        '매운거 먹은 다음 날 아침 힘듦',
        '그래도 나랑 매운거 먹어줘야함',
      ],
    },
    for: [
      {
        type: 'ramen',
        name: '신라면',
      },
      {
        type: 'ramen',
        name: '치즈 불닭볶음면',
      },
      {
        type: 'chicken',
        name: '교촌 레드콤보 치킨',
      },
    ],
  },
  3: {
    img: '/images/lv3.png',
    title: '군침이 싹 도네',
    content:
      '쓰으으으읍\n빨간맛만 봐도 군침이 싹 도네.\nㅇㅇ 당연함\n그만큼 맛있음.',
    character: {
      title: '맵러버',
      list: [
        '스트레스 받으면 매운거 땡김',
        '맵찔이들이랑 같이 먹으면 만족 안됨',
        '맵부심 부리다가 눈물 쏙 뺀 적 있음',
        '다음날 솔직히 좀 배아픔',
        '그래도 또 생각남',
      ],
    },
    for: [
      {
        type: 'ramen',
        name: '불닭볶음면 오리지널',
      },
      {
        type: 'tteok',
        name: '엽기떡볶이 덜 매운 맛',
      },
      {
        type: 'chicken',
        name: '지코바 순살 양념 매운 맛',
      },
    ],
  },
  4: {
    img: '/images/lv4.png',
    title: '이건 분명 위험한 중독',
    content:
      '매운 맛 아니면 감흥이 없나요?\n그렇다면 매운맛에\n이미 중독되었습니다.',
    character: {
      title: '맵마스터',
      list: [
        '매운거 다 잘먹음',
        '매운맛 잘 맞는 사람 만나면 반가워서 소리지름',
        '매운 맛집투어 가본 적 있음',
        '이거 보면서 매운거 땡김',
        '맵부심 가지고 매운거 찾다가 가끔 눈물흘림',
      ],
    },
    for: [
      {
        type: 'ramen',
        name: '틈새라면',
      },
      {
        type: 'tteok',
        name: '엽기떡볶이 오리지널 맛',
      },
      {
        type: 'chicken',
        name: '지코바 순살 양념 제일 매운 맛',
      },
    ],
  },
  5: {
    img: '/images/lv5.png',
    title: 'K-입맛 그자체',
    content:
      '불닭볶음면정도는\n그저 평범한 비빔면일 뿐인 당신\n바로 K-입맛 입니다.',
    character: {
      title: '맵부심',
      list: [
        '사실 웬만한건 이제 맵지도 않음',
        '더 자극적인게 필요함',
        '매운맛을 습관적으로 찾음',
        '아까 매운거 먹었는데 또 떙김',
        '이정도면 운명이 아닐까',
      ],
    },
    for: [
      {
        type: 'ramen',
        name: '송주 불냉면',
      },
      {
        type: 'tteok',
        name: '엽기떡볶이 매운 맛',
      },
      {
        type: 'ramen',
        name: '불닭볶음면 핵불닭맛',
      },
    ],
  },
};

export default TestResult;
