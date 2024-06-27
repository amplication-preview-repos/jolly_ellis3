import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalysisServiceBase } from "./base/analysis.service.base";

@Injectable()
export class AnalysisService extends AnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
