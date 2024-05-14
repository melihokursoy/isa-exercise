import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@ObjectType()
export class IsaOption {
  @Field(type => String)
  @IsUUID()
  id: string;

  @Field(type => String)
  name: string;
}
