import { SortOrder } from "../../util/SortOrder";

export type ReelOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  followersGained?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  link?: SortOrder;
  reach?: SortOrder;
  saves?: SortOrder;
  shares?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
  watchTime?: SortOrder;
};
