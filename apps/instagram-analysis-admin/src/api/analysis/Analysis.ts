import { Reel } from "../reel/Reel";

export type Analysis = {
  comments: string | null;
  createdAt: Date;
  editingStyle: string | null;
  effectiveness: string | null;
  hook: string | null;
  id: string;
  reel?: Reel | null;
  structure: string | null;
  updatedAt: Date;
};
