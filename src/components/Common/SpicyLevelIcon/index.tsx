import React from 'react';
import Image from 'next/image';
import { LEVEL } from '@/types';
import svg_0 from 'public/assets/SpciyLevelInput/0.svg';
import svg_1 from 'public/assets/SpciyLevelInput/1.svg';
import svg_2 from 'public/assets/SpciyLevelInput/2.svg';
import svg_3 from 'public/assets/SpciyLevelInput/3.svg';
import svg_0_disabled from 'public/assets/SpciyLevelInput/0_disabled.svg';
import svg_1_disabled from 'public/assets/SpciyLevelInput/1_disabled.svg';
import svg_2_disabled from 'public/assets/SpciyLevelInput/2_disabled.svg';
import svg_3_disabled from 'public/assets/SpciyLevelInput/3_disabled.svg';

interface Props {
  level: LEVEL;
  checked: boolean;
}

// 아이콘
const SpicyLevelIcon = (props: Props) => {
  const { level, checked } = props;

  switch (level) {
    case '냠냠':
      return <Image src={checked ? svg_0 : svg_0_disabled} alt={level} />;
    case '쓰읍':
      return <Image src={checked ? svg_1 : svg_1_disabled} alt={level} />;
    case '씁하':
      return <Image src={checked ? svg_2 : svg_2_disabled} alt={level} />;
    case '헥헥':
      return <Image src={checked ? svg_3 : svg_3_disabled} alt={level} />;
    default:
      return <div></div>;
  }
};

export default SpicyLevelIcon;
