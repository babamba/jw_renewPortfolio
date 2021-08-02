import { Image } from "./stack";

export interface Resume {
  id: number;
  period: string;
  statusText: string;
  statusType: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  // tag: {
  //   type: string;
  //   text: string;
  // };
  usedPosition: boolean;
  usedRank: boolean;
  companyName: string;
  companyImg: string;
  rank: string | null;
  position: string | null;
  resume_stories: Story[];
  flow: number;
}

export interface Story {
  resume: number;
  id: number;
  created_at: string;
  updated_at: string;
  type: "process" | "complete";
  title: string;
  isDeveloperPosition: boolean;
  programLanguage: string | null;
  desc: string[];
  link: string | null;
}

// interface SubDescription {
//   title: string;
//   type: "normal" | "strong" | "link";
// }
