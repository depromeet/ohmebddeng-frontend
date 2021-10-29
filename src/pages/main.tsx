import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import { Header, Drawer } from '@/components/Common';
import { Category, ProfileCard } from '@/components/Main';
import { USER_LEVEL } from '@/types';
import drawer_navigator from 'public/assets/common/hamburger.svg';
import svg_0 from 'public/assets/Main/0.svg';
import svg_1 from 'public/assets/Main/1.svg';
import svg_2 from 'public/assets/Main/2.svg';
import svg_3 from 'public/assets/Main/3.svg';
import svg_random from 'public/assets/Main/random.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const sliderSetting = {
  dots: true,
};

const Main: NextPage = () => {
  const [isTest] = useState(false);
  const [drawerOpend, setDrawerOpend] = useState(false);

  const handleDrawerOpen = () => setDrawerOpend(true);
  const hanldeDrawerClose = () => setDrawerOpend(false);

  return (
    <>
      <Drawer closeDrawerHandler={hanldeDrawerClose} isOpen={drawerOpend} />
      <Header type="side">
        <h2>오맵땡</h2>
        <Image
          src={drawer_navigator}
          alt="drawer_navigator"
          layout="fixed"
          onClick={handleDrawerOpen}
        />
      </Header>
      <Container>
        {isTest ? (
          <>
            <Slider {...sliderSetting}>
              {Object.values(USER_LEVEL).map((level) => (
                <ProfileCard level={level} key={level} />
              ))}
            </Slider>
            <Category {...Recommend} />
            <Category {...Random} />
          </>
        ) : (
          <>
            <Slider {...sliderSetting}>
              {Object.values(USER_LEVEL).map((level) => (
                <ProfileCard level={level} key={level} />
              ))}
            </Slider>
            <Category
              disabled
              title={Recommend.title}
              contents={Recommend.contents.slice(0, 2)}
            />
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 11.5px;
  font-weight: 800;
  gap: 30px 0;
  overflow: hidden;
`;
export default Main;
