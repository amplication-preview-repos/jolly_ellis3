import { AnalysisWhereInput } from "./AnalysisWhereInput";
import { AnalysisOrderByInput } from "./AnalysisOrderByInput";

export type AnalysisFindManyArgs = {
  where?: AnalysisWhereInput;
  orderBy?: Array<AnalysisOrderByInput>;
  skip?: number;
  take?: number;
};
