import { Reel as TReel } from "../api/reel/Reel";

export const REEL_TITLE_FIELD = "link";

export const ReelTitle = (record: TReel): string => {
  return record.link?.toString() || String(record.id);
};
