import { ReelWhereInput } from "./ReelWhereInput";
import { ReelOrderByInput } from "./ReelOrderByInput";

export type ReelFindManyArgs = {
  where?: ReelWhereInput;
  orderBy?: Array<ReelOrderByInput>;
  skip?: number;
  take?: number;
};
