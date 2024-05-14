import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsUUID,IsStrongPassword} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(type => String,{ nullable: true })
  @IsUUID()
  @IsOptional()
  id?: string;

  @Field(type => String)
  fullName: string;

  @Field(type => String)
  @IsEmail()
  email: string;

  @Field(type => String)
  @IsStrongPassword()
  password: string;
}
