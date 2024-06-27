import { Injectable } from "@nestjs/common";
import { AnalyzeReelInput } from "../instagramReels/AnalyzeReelInput";
import { AnalyzeReelOutput } from "../instagramReels/AnalyzeReelOutput";

@Injectable()
export class InstagramReelsService {
  constructor() {}
  async AnalyzeInstagramReel(args: AnalyzeReelInput): Promise<AnalyzeReelOutput> {
    throw new Error("Not implemented");
  }
  async AnalyzeReel(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
