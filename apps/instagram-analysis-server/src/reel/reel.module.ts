import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReelModuleBase } from "./base/reel.module.base";
import { ReelService } from "./reel.service";
import { ReelController } from "./reel.controller";
import { ReelResolver } from "./reel.resolver";

@Module({
  imports: [ReelModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReelController],
  providers: [ReelService, ReelResolver],
  exports: [ReelService],
})
export class ReelModule {}
