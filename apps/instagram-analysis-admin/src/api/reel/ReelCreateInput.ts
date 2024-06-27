import { AnalysisCreateNestedManyWithoutReelsInput } from "./AnalysisCreateNestedManyWithoutReelsInput";

export type ReelCreateInput = {
  analyses?: AnalysisCreateNestedManyWithoutReelsInput;
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
