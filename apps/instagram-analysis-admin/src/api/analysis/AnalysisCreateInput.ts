import { ReelWhereUniqueInput } from "../reel/ReelWhereUniqueInput";

export type AnalysisCreateInput = {
  comments?: string | null;
  editingStyle?: string | null;
  effectiveness?: string | null;
  hook?: string | null;
  reel?: ReelWhereUniqueInput | null;
  structure?: string | null;
};
