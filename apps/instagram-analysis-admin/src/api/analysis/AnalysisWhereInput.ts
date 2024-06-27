import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReelWhereUniqueInput } from "../reel/ReelWhereUniqueInput";

export type AnalysisWhereInput = {
  comments?: StringNullableFilter;
  editingStyle?: StringNullableFilter;
  effectiveness?: StringNullableFilter;
  hook?: StringNullableFilter;
  id?: StringFilter;
  reel?: ReelWhereUniqueInput;
  structure?: StringNullableFilter;
};
