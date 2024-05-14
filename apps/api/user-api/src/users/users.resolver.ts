import { Resolver, Query, Mutation, Args, Int, Context, GraphQLExecutionContext, GqlExecutionContext, ResolveReference } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Auth } from './entities/auth.entity';
import { LoginArgs } from './dto/login.args';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { CurrentUser } from './users.decorator';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Query(() => Auth, { name: 'login' })
  async login(@Args() args: LoginArgs) {
    const result = await this.usersService.login(args)
    // const response = await ctx.getContext().res;
    // response.cookie('Authorization', `Bearer ${result.access_token}`);
    return result;
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @UseGuards(AuthGuard)
  @Query(() => [User], { name: 'getAllUsers' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'getUserById' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User, { name: 'updateUserById' })
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User, { name: 'deleteUserById' })
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }

  @Query(() => User, { name: 'whoAmI' })
  @UseGuards(AuthGuard)
  whoami(@CurrentUser() user: User) {
    return this.usersService.findOne(user.id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): Promise<User> {
    return this.usersService.findOne(reference.id)
  }
}
