export interface Folio {
  folioId: string;
  folioName: string;
  pics: string;
  period: string;
  isComplete: boolean;
  position: string;
  folioSubTitle: string;
  stack: string;
  link: string;
  subDescriptions: string[];
}

export interface FolioItem {
  id: string;
  name: string;
  age: string;
  distance: string;
  position: string;
  titleDetail: string;
  subDescriptions: any;
  stack: string;
  pics: string;
  link: string;
  detail?: {
    pic: string;
    comment: string;
  }[];
}
