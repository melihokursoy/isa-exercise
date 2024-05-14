import { ObjectType, Field, Float } from '@nestjs/graphql';
import { IsUUID, IsNumber } from 'class-validator';

@ObjectType()
export class Isa {
  @Field(type => String)
  @IsUUID()
  userId: string;

  @Field(type => String)
  @IsUUID()
  isaOptionId: string;

  @Field(type => Float)
  @IsNumber()
  savings: number;
}

