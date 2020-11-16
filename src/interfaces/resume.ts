export interface Resume {
  period: string;
  tag: {
    type: string;
    text: string;
  };
  usedPosition: boolean;
  usedRank: boolean;
  companyName: string;
  companyImg: string;
  rank: string;
  position: string;
  resumeStory: Story[];
}

export interface Story {
  type: "process" | "complete";
  title: string;
  programLanguage: string;
  subDescriptions: SubDescription[];
}

interface SubDescription {
  title: string;
  type: "normal" | "strong" | "link";
}
