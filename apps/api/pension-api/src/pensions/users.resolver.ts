import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PensionsService } from './pensions.service';
import { User } from './entities/user.entity';
import {Pension} from './entities/pension.entity'
import { DefaultArgs } from '../generated/prisma-client/runtime/library';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly pensionsService: PensionsService) { }

  @ResolveField(()=> Pension)
   pension(@Parent() user:User): Promise<Pension> {
    return this.pensionsService.forUser(user.id) || null
  }
}
