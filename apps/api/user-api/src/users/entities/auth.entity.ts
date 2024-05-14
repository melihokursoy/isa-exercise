import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field(type => String)
  access_token: string;
}


