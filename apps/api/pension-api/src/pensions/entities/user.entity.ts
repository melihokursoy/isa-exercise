import { ObjectType, Field, Directive } from '@nestjs/graphql';
import { IsUUID, IsEmail } from 'class-validator';
import { Pension } from './pension.entity';


@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(type => String)
  @IsUUID()
  id: string;

  @Field(type => Pension,{ nullable: true })
  pension?: Pension;
}


