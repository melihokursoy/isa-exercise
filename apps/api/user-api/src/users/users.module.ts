import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClientUserModule } from './prisma.module';


@Module({
  imports: [
    PrismaClientUserModule,
    JwtModule.register({
      global: true,
      secret: "123",
      signOptions: { expiresIn: '600s' },
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2
      }
    })],
  providers: [UsersResolver, UsersService],
})
export class UsersModule { }
