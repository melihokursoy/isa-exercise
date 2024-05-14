import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { authContext } from './auth.context';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        context: authContext,
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: 'users',
              url: 'http://localhost:3001/graphql',
            },
            {
              name: 'pension',
              url: 'http://localhost:3002/graphql',
            },
            {
              name: 'isa',
              url: 'http://localhost:3003/graphql',
            },
          ],
        }),
        buildService({ url }) {
          return new RemoteGraphQLDataSource({
            url,
            willSendRequest: ({ request, context }) => {
              context.auth ?
                request.http.headers.set('auth', JSON.stringify(context.auth)) :
                request.http.headers.delete('auth');
            },
          });
        },
      },
    }),
  ]
})
export class AppModule { }