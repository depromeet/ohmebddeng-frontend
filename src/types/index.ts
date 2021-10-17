export enum LEVEL {
  냠냠 = '냠냠',
  쓰읍 = '쓰읍',
  씁하 = '씁하',
  헥헥 = '헥헥',
  모름 = '모름',
}

export enum TASTE {
  매콤달콤한 = '매콤달콤한',
  개운한 = '개운한',
  칼칼한 = '칼칼한',
  얼큰한 = '얼큰한',
  얼얼한 = '얼얼한',
  알싸한 = '알싸한',
}

export enum INITIAL_FOOD {
  FOOD1 = '진라면 매운맛',
  FOOD2 = '불닭 볶음면',
  FOOD3 = '신라면',
}

export interface ReviewState {
  level?: LEVEL;
  taste?: Set<TASTE>;
}

export interface Food {
  id: string;
  name: string;
  image_url: string;
}
