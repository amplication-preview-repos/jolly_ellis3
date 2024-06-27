import { AnalysisUpdateManyWithoutReelsInput } from "./AnalysisUpdateManyWithoutReelsInput";

export type ReelUpdateInput = {
  analyses?: AnalysisUpdateManyWithoutReelsInput;
  comments?: number | null;
  followersGained?: number | null;
  likes?: number | null;
  link?: string | null;
  reach?: number | null;
  saves?: number | null;
  shares?: number | null;
  views?: number | null;
  watchTime?: number | null;
};
