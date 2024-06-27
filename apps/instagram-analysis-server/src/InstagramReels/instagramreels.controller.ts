import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { InstagramReelsService } from "./instagramreels.service";
import { AnalyzeReelOutput } from "../instagramReels/AnalyzeReelOutput";

@swagger.ApiTags("instagramReels")
@common.Controller("instagramReels")
export class InstagramReelsController {
  constructor(protected readonly service: InstagramReelsService) {}

  @common.Post("/analyze-instagram-reel")
  @swagger.ApiOkResponse({
    type: AnalyzeReelOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AnalyzeInstagramReel(
    @common.Body()
    body: string
  ): Promise<AnalyzeReelOutput> {
        return this.service.AnalyzeInstagramReel(body);
      }

  @common.Get("/:id/analyze-reel")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AnalyzeReel(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AnalyzeReel(body);
      }
}
