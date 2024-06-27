import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReelService } from "./reel.service";
import { ReelControllerBase } from "./base/reel.controller.base";

@swagger.ApiTags("reels")
@common.Controller("reels")
export class ReelController extends ReelControllerBase {
  constructor(
    protected readonly service: ReelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
