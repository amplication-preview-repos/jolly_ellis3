/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Reel } from "./Reel";
import { ReelCountArgs } from "./ReelCountArgs";
import { ReelFindManyArgs } from "./ReelFindManyArgs";
import { ReelFindUniqueArgs } from "./ReelFindUniqueArgs";
import { CreateReelArgs } from "./CreateReelArgs";
import { UpdateReelArgs } from "./UpdateReelArgs";
import { DeleteReelArgs } from "./DeleteReelArgs";
import { AnalysisFindManyArgs } from "../../analysis/base/AnalysisFindManyArgs";
import { Analysis } from "../../analysis/base/Analysis";
import { ReelService } from "../reel.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Reel)
export class ReelResolverBase {
  constructor(
    protected readonly service: ReelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Reel",
    action: "read",
    possession: "any",
  })
  async _reelsMeta(
    @graphql.Args() args: ReelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Reel])
  @nestAccessControl.UseRoles({
    resource: "Reel",
    action: "read",
    possession: "any",
  })
  async reels(@graphql.Args() args: ReelFindManyArgs): Promise<Reel[]> {
    return this.service.reels(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Reel, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reel",
    action: "read",
    possession: "own",
  })
  async reel(@graphql.Args() args: ReelFindUniqueArgs): Promise<Reel | null> {
    const result = await this.service.reel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Reel)
  @nestAccessControl.UseRoles({
    resource: "Reel",
    action: "create",
    possession: "any",
  })
  async createReel(@graphql.Args() args: CreateReelArgs): Promise<Reel> {
    return await this.service.createReel({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Reel)
  @nestAccessControl.UseRoles({
    resource: "Reel",
    action: "update",
    possession: "any",
  })
  async updateReel(@graphql.Args() args: UpdateReelArgs): Promise<Reel | null> {
    try {
      return await this.service.updateReel({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Reel)
  @nestAccessControl.UseRoles({
    resource: "Reel",
    action: "delete",
    possession: "any",
  })
  async deleteReel(@graphql.Args() args: DeleteReelArgs): Promise<Reel | null> {
    try {
      return await this.service.deleteReel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Analysis], { name: "analyses" })
  @nestAccessControl.UseRoles({
    resource: "Analysis",
    action: "read",
    possession: "any",
  })
  async findAnalyses(
    @graphql.Parent() parent: Reel,
    @graphql.Args() args: AnalysisFindManyArgs
  ): Promise<Analysis[]> {
    const results = await this.service.findAnalyses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
