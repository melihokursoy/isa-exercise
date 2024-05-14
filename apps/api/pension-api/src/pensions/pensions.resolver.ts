import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { PensionsService } from './pensions.service';
import { Pension } from './entities/pension.entity';
import { CurrentUser } from './users.decorator';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Resolver(() => Pension)
export class PensionsResolver {
  constructor(private readonly pensionsService: PensionsService) { }

  @UseGuards(AuthGuard)
  @Query(() => Pension, { nullable:true, name: 'getMyPension' })
  getMyPension(@CurrentUser() user: User): Promise<Pension> {
    return this.pensionsService.forUser(user.id);
  }

  @ResolveField(() => User)
  user(@Parent() pension: Pension): any {
    return { __tylepane: 'User', id: pension.userId }
  }
}
