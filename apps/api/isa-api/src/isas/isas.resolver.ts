import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IsasService } from './isas.service';
import { Isa } from './entities/isa.entity';
import { IsaOption } from './entities/isaOption.entity';

import { CreateIsaInput } from './dto/create-isa.input';
import { CurrentUser } from './users.decerator';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Resolver(() => Isa)
export class IsasResolver {
  constructor(private readonly isasService: IsasService) { }

  @Mutation(() => Isa, { name: 'createIsa' })
  createIsa(@Args('createIsaInput') createIsaInput: CreateIsaInput,
    @CurrentUser() user: any) {
    return this.isasService.createIsa(createIsaInput, user.id);
  }

  @Query(() => [IsaOption], { name: 'getAllIsaOptions' })
  getAllIsaOptions() {
    return this.isasService.getAllIsaOptions();
  }

  @Query(() => IsaOption, { name: 'getIsaOptionById' })
  getIsaOptionById(@Args('id', { type: () => String }) id: string) {
    return this.isasService.getIsaOptionById(id);
  }

  @UseGuards(AuthGuard)
  @Query(() => Isa, { nullable:true, name: 'getMyIsa' })
  getMyIsa(@CurrentUser() user: any) {
    return this.isasService.getMyIsa(user.id);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Isa, { name: "deleteMyIsa" })
  deleteMyIsa(@CurrentUser() user: any) {
    return this.isasService.deleteMyIsa(user.id);
  }
}
