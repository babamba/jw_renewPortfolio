import { Image } from "./stack";

export interface Resume {
  period: string;
  statusText: string;
  statusType: string;
  // tag: {
  //   type: string;
  //   text: string;
  // };
  usedPosition: boolean;
  usedRank: boolean;
  companyName: string;
  companyImg: Image;
  rank: string;
  position: string;
  resume_stories: Story[];
  flow: number;
}

export interface Story {
  type: "process" | "complete";
  title: string;
  isDeveloperPosition: boolean;
  programLanguage: string;
  desc: string[];
  link?: string;
}

// interface SubDescription {
//   title: string;
//   type: "normal" | "strong" | "link";
// }
