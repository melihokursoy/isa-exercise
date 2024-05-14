import { InputType, Float, Field } from '@nestjs/graphql';
import { IsNumber, IsUUID } from 'class-validator';

@InputType()
export class CreateIsaInput {
  @Field(() => String)
  @IsUUID()
  isaOptionId: string;

  @Field(() => Float)
  @IsNumber()
  savings: number;
}
