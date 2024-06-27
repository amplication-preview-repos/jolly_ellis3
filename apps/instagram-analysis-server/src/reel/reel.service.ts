import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReelServiceBase } from "./base/reel.service.base";

@Injectable()
export class ReelService extends ReelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
