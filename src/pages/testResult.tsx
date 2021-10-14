import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Loading from '@/components/Common/Loading';
import Button from '@/components/Input/Button';
import { initMSW } from '@/lib/msw';

initMSW();

type InfoType = {
  img: string;
  title: string;
  content: string;
};

const levelInfo: { [key: number]: InfoType } = {
  1: {
    img: '',
    title: '당신의 불타는 똥꼬',
    content:
      '다음 날 아침 화장실에서 심판을 받는다. 심판은 고통스럽고 따갑고 뜨겁다. 매콤함이 항문으로도 느껴지는 것만 같다..',
  },
  2: {
    img: '',
    title: '빠빠빨간맛..궁금해 허니',
    content:
      '지금 흐르는건 땀일까 콧물일까  어질한 매운맛에 정신 못차리다가도  어느새 다시 찾는 나.. 조금 빠져버린걸지도?',
  },
  3: {
    img: '',
    title: '군침이 싹 도네',
    content: '빨간색만 보면 군침이 싹도네  그만큼 맛있다는거지..',
  },
  4: {
    img: '',
    title: '한국인이면 매운맛이지',
    content:
      '가능한..빨간색이 보이게..!  이제 색깔이 빨갛지 않은 요리는 맛없게 느껴진다,,',
  },
  5: {
    img: '',
    title: 'K-입맛 그자체',
    content: "매운 맛을 찢어버린 캡사이'신'  당신이 K-입맛입니다.",
  },
};

const TestResult: NextPage = () => {
  const [isResult, setIsResult] = useState<boolean>(false);
  const reTest = () => {};
  const shareResult = () => {};

  useEffect(() => {
    setTimeout(() => {
      setIsResult(true);
    }, 3000);
  }, []);

  return (
    <main>
      <Container>
        {isResult ? (
          <Modal>
            <Content>
              <img src="/images/lv1.png" alt="level_1" />
              <ResultText level={1} />
              <div className="buttons">
                <Button
                  buttonType="contained"
                  color="red"
                  rounded
                  fullWidth
                  onClick={reTest}
                >
                  다시 테스트하기
                </Button>
                <Button
                  fullWidth
                  buttonType="outline"
                  color="red"
                  rounded
                  onClick={shareResult}
                >
                  맵순위 공유하기
                </Button>
              </div>
            </Content>
          </Modal>
        ) : (
          <div className="loading-box">
            <p>맵레벨을 측정하고 있어요</p>
            <Loading />
          </div>
        )}
      </Container>
    </main>
  );
};

const Container = styled.div`
  padding: 0 16px;

  h1 {
    font-size: 17px;
    text-align: center;
    padding: 17px 0;
  }

  .buttons {
    button + button {
      margin-top: 12px;
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

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const handleOnClick = () => {
    console.log('click!');
  };

  return (
    <ModalWrapper>
      <div className="btn_close" onClick={handleOnClick}>
        x
      </div>
      {children}
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.grey60};
  .btn_close {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ResultText {
  level: number;
}

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
  h2 {
    margin-top: 47px;
    font-size: 22px;
    font-weight: 400;
  }
  p {
    margin-top: 20px;
    margin-bottom: 24px;
    font-size: 13px;
  }
`;

export default TestResult;
