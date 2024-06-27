import { ReelWhereUniqueInput } from "../reel/ReelWhereUniqueInput";

export type AnalysisUpdateInput = {
  comments?: string | null;
  editingStyle?: string | null;
  effectiveness?: string | null;
  hook?: string | null;
  reel?: ReelWhereUniqueInput | null;
  structure?: string | null;
};
