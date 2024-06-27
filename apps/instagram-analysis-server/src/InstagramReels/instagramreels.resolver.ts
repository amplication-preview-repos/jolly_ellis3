import * as graphql from "@nestjs/graphql";
import { AnalyzeReelInput } from "../instagramReels/AnalyzeReelInput";
import { AnalyzeReelOutput } from "../instagramReels/AnalyzeReelOutput";
import { InstagramReelsService } from "./instagramreels.service";

export class InstagramReelsResolver {
  constructor(protected readonly service: InstagramReelsService) {}

  @graphql.Mutation(() => AnalyzeReelOutput)
  async AnalyzeInstagramReel(
    @graphql.Args()
    args: AnalyzeReelInput
  ): Promise<AnalyzeReelOutput> {
    return this.service.AnalyzeInstagramReel(args);
  }

  @graphql.Query(() => String)
  async AnalyzeReel(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AnalyzeReel(args);
  }
}
