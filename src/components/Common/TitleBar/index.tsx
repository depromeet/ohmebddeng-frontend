import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import arrow_back from 'public/assets/common/arrow_back.svg';
import Image from 'next/image';

interface Props {
  backButton: boolean;
  backLocation: string;
  content: string;
}

const Container = styled.div`
  height: 51px;
  padding: 17px 0;
  & div {
    cursor: pointer;
    float: left;
  }
  & h1 {
    /* 
    가운데 정렬 주석입니다.
    가운데 정렬은 맞는데 폰트 느낌이 달라 피그마랑 다르게
    표시 되고 있어서 임시 주석처리 했습니다. :joy:
    */
    /* 
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto; */
    line-height: 140%;
  }
`;

const TitleBar = (props: Props) => {
  const { backButton = false, backLocation = '/', content } = props;
  const router = useRouter();

  const moveLocation = () => {
    router.push(backLocation);
  };

  return (
    <Container>
      {backButton && (
        <Image onClick={moveLocation} src={arrow_back} alt={arrow_back} />
      )}
      <h1>{content}</h1>
    </Container>
  );
};

export default TitleBar;
