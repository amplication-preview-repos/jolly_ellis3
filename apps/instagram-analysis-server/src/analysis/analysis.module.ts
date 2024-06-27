import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalysisModuleBase } from "./base/analysis.module.base";
import { AnalysisService } from "./analysis.service";
import { AnalysisController } from "./analysis.controller";
import { AnalysisResolver } from "./analysis.resolver";

@Module({
  imports: [AnalysisModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalysisController],
  providers: [AnalysisService, AnalysisResolver],
  exports: [AnalysisService],
})
export class AnalysisModule {}
