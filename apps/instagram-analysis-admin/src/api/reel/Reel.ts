import { Analysis } from "../analysis/Analysis";

export type Reel = {
  analyses?: Array<Analysis>;
  comments: number | null;
  createdAt: Date;
  followersGained: number | null;
  id: string;
  likes: number | null;
  link: string | null;
  reach: number | null;
  saves: number | null;
  shares: number | null;
  updatedAt: Date;
  views: number | null;
  watchTime: number | null;
};
