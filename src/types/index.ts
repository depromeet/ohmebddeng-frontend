export enum LEVEL {
  냠냠 = '냠냠',
  쓰읍 = '쓰읍',
  씁하 = '씁하',
  헥헥 = '헥헥',
}

export enum TASTE {
  얼큰해요 = '얼큰해요',
  매콤해요 = '매콤해요',
  끝맛이매워요 = '끝맛이매워요',
  매워요 = '매워요',
  달달해요 = '달달해요',
}

export interface ReviewValue {
  levelValue: string;
  tasteValue: string[];
}
