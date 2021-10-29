export enum TASTE_LEVEL {
  냠냠 = '냠냠',
  쓰읍 = '쓰읍',
  씁하 = '씁하',
  헥헥 = '헥헥',
}
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

export enum USER_LEVEL {
  맵찔이 = '맵찔이',
  맵초보 = '맵초보',
  맵러버 = '맵러버',
  맵부심 = '맵부심',
  맵마스터 = '맵마스터',
}

export enum USER_LEVEL_NUMBER {
  맵찔이,
  맵초보,
  맵러버,
  맵부심,
  맵마스터,
}

export interface ReviewState {
  level?: LEVEL;
  taste?: Set<TASTE>;
}

export interface Food {
  id: string;
  name: string;
  subName: string;
  imageUrl: string;
}
