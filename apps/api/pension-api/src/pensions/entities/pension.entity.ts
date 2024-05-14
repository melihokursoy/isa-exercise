import { ObjectType, Field, Float } from '@nestjs/graphql';
import { IsUUID, IsNumber } from 'class-validator';
import { User } from './user.entity';

@ObjectType()
export class Pension {
  @Field(type => String)
  @IsUUID()
  userId: string;

  @Field(type => String)
  employer: string;

  @Field(type => Float)
  @IsNumber()
  savings: number;

  @Field(type => User)
  user?: User;
}
