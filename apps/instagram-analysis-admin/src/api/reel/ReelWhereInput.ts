import { AnalysisListRelationFilter } from "../analysis/AnalysisListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ReelWhereInput = {
  analyses?: AnalysisListRelationFilter;
  comments?: IntNullableFilter;
  followersGained?: IntNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  link?: StringNullableFilter;
  reach?: IntNullableFilter;
  saves?: IntNullableFilter;
  shares?: IntNullableFilter;
  views?: IntNullableFilter;
  watchTime?: FloatNullableFilter;
};
