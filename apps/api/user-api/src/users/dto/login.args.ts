import { Field, ArgsType } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'

@ArgsType()
export class LoginArgs {
    @Field(() => String)
    @IsEmail()
    email: string

    @Field(() => String)
    @IsEmail()
    password: string
}