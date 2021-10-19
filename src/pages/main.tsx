import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { HTMLAttributes } from 'react';
import { Category } from '@/components/Main';
import svg_0 from 'public/assets/Main/0.svg';
import svg_1 from 'public/assets/Main/1.svg';
import svg_2 from 'public/assets/Main/2.svg';
import svg_3 from 'public/assets/Main/3.svg';
import svg_random from 'public/assets/Main/random.svg';

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  height?: number;
}

const Main: NextPage = () => {
  const Recommend = {
    title: '오늘의 추천',
    contents: [
      {
        textFirst: '오늘의',
        textSecond: '추천 떡볶이',
        image: svg_0,
        color: '#FF5341',
      },
      {
        textFirst: '오늘의',
        textSecond: '추천 라면',
        image: svg_1,
        color: '#EE726E',
      },
      {
        textFirst: '맵마스터들의',
        textSecond: '추천 BEST 5',
        image: svg_2,
        color: '#FF9654',
      },
      {
        textFirst: '#알싸한 음식',
        textSecond: '모아보기',
        image: svg_3,
        color: '#FFC56B',
      },
    ],
  };

  const Random = {
    title: '뭐 먹을지 모르겠으면?',
    contents: [
      {
        textFirst: '랜덤 음식 뽑기',
        image: svg_random,
        color: '#E34B4B',
      },
    ],
    height: 104,
  };

  return (
    <Container>
      <Category title={Recommend.title} contants={Recommend.contents} />
      <Category
        title={Random.title}
        contants={Random.contents}
        height={Random.height}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 11.5px;
  font-weight: 800;
  gap: 30px 0;
`;

export default Main;
