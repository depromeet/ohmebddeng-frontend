import { DefaultSeo } from 'next-seo';

const title = '오맵땡';
const description =
  '오늘 매운게 땡기는 당신.. 당신에게 매운 음식.. 추천해줄게..';
const url = 'https://ohmebddeng.kr';

export default function DefaultHead() {
  return (
    <DefaultSeo
      title={title}
      description={description}
      canonical="https://ohmebddeng.kr"
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: `${url}/assets/OpenGraph/image.png`,
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
