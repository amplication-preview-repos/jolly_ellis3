import { Module } from "@nestjs/common";
import { InstagramReelsService } from "./instagramreels.service";
import { InstagramReelsController } from "./instagramreels.controller";
import { InstagramReelsResolver } from "./instagramreels.resolver";

@Module({
  controllers: [InstagramReelsController],
  providers: [InstagramReelsService, InstagramReelsResolver],
  exports: [InstagramReelsService],
})
export class InstagramReelsModule {}
