import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalysisService } from "./analysis.service";
import { AnalysisControllerBase } from "./base/analysis.controller.base";

@swagger.ApiTags("analyses")
@common.Controller("analyses")
export class AnalysisController extends AnalysisControllerBase {
  constructor(
    protected readonly service: AnalysisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
