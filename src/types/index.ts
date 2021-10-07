export enum LEVEL {
  냠냠 = '냠냠',
  쓰읍 = '쓰읍',
  씁하 = '씁하',
  헥헥 = '헥헥',
}

export enum TASTE {
  매콤달콤한 = '매콤달콤한',
  게운한 = '게운한',
  칼칼한 = '칼칼한',
  얼큰한 = '얼큰한',
  얼얼한 = '얼얼한',
  알싸한 = '알싸한',
}

export interface ReviewValue {
  levelValue: string;
  tasteValue: string[];
}
