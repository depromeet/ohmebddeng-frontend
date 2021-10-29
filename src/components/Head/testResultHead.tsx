import { NextSeo } from 'next-seo';
import { useMemo } from 'react';

interface TestResultHeadProps {
  level: number;
}

export default function TestResultHead({ level }: TestResultHeadProps) {
  const title = '오맵땡';

  const description = useMemo(() => {
    if (level === 1) {
      return '매운맛만 봐도 정수리가 뜨거워지는 당신. 한 입만 먹었을 뿐이지만... ';
    }

    if (level === 2) {
      return '지금 흐르는건 땀일까 콧물일까? 어질한 매운맛에 정신을..';
    }

    if (level === 3) {
      return '쓰으으으읍 빨간맛만 봐도 군침이 싹 도네. ㅇㅇ 당연함. 그만큼 맛있음.';
    }

    if (level === 4) {
      return '매운 맛 아니면 감흥이 없나요? 그렇다면 매운맛에 이미 중독되었습니다.';
    }

    if (level === 5) {
      return '불닭볶음면정도는 그저 평범한 비빔면일 뿐인 당신 바로 K-입맛 입니다.';
    }
  }, [level]);

  const url = 'https://ohmebddeng.kr';

  return (
    <NextSeo
      title={title}
      description={description}
      canonical="https://ohmebddeng.kr"
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: `${url}/assets/OpenGraph/level${level}.png`,
            width: 1200,
            height: 630,
            alt: '오맵땡',
            type: 'image/png',
          },
        ],
      }}
    />
  );
}
