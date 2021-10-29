export enum TASTE_LEVEL {
  냠냠 = '냠냠',
  쓰읍 = '쓰읍',
  씁하 = '씁하',
  헥헥 = '헥헥',
}

export enum TASTE {
  매콤달콤한 = '매콤달콤한',
  개운한 = '개운한',
  칼칼한 = '칼칼한',
  얼큰한 = '얼큰한',
  얼얼한 = '얼얼한',
  알싸한 = '알싸한',
}

export enum USER_LEVEL {
  맵찔이 = '맵찔이',
  맵초보 = '맵초보',
  맵러버 = '맵러버',
  맵부심 = '맵부심',
  맵마스터 = '맵마스터',
}

export interface ReviewState {
  level?: HOT_LEVEL_SERVER;
  taste?: Set<TASTE>;
}

export interface Food {
  id: string;
  name: string;
  subName: string;
  imageUrl: string;
}

export enum HOT_LEVEL_CLIENT {
  EASY = '냠냠',
  NORMAL = '쓰읍',
  HOT = '씁하',
  HOTTEST = '헥헥',
  NEVER_TRIED = '모름',
}

export enum HOT_LEVEL_SERVER {
  냠냠 = 'EASY',
  쓰읍 = 'NORMAL',
  씁하 = 'HOT',
  헥헥 = 'HOTTEST',
  모름 = 'NEVER_TRIED',
}
