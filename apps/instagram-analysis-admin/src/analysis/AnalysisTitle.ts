import { Analysis as TAnalysis } from "../api/analysis/Analysis";

export const ANALYSIS_TITLE_FIELD = "id";

export const AnalysisTitle = (record: TAnalysis): string => {
  return record.id?.toString() || String(record.id);
};
