export interface Stack {
  created_at?: string;
  id: number;
  imgUrl: string;
  isUsed: boolean;
  published_at?: string;
  stackTitle: string;
  tooltipTitle: string | null;
  updated_at?: string;
}

export interface Image {
  alternativeText: string;
  caption: string;
  created_at: string;
  ext: string;
  formats: null;
  hash: string;
  height: number;
  id: number;
  mime: string;
  name: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  size: number;
  updated_at: string;
  url: string;
  width: number;
}

export type STACK = "remote" | "front" | "backend" | "ci" | "infra" | "interest";
