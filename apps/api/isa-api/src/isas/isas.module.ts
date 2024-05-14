import { Module } from '@nestjs/common';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'nestjs-prisma';
import { PrismaClientIsaModule } from './prisma.client.isa.module';
import { IsasService } from './isas.service';
import { IsasResolver } from './isas.resolver';

@Module({
  imports: [
    PrismaClientIsaModule,
    //PrismaModule.forRoot(),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2
      }
    })],
  providers: [IsasResolver, IsasService],
})
export class IsasModule {}
