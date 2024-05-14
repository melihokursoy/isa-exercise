import { ObjectType, Field, Directive } from '@nestjs/graphql';
import { IsUUID, IsEmail } from 'class-validator';


@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(type => String)
  @IsUUID()
  id: string;

  @Field(type => String)
  fullName: string;

  @Field(type => String)
  @IsEmail()
  email: string;
}


