import { Module } from '@nestjs/common';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClientPensionModule } from './prisma.client.pension.module';

import { PensionsService } from './pensions.service';
import { PensionsResolver } from './pensions.resolver';

@Module({
  imports: [
    PrismaClientPensionModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2
      }
    })],
  providers: [PensionsResolver, PensionsService],
})
export class PensionsModule { }