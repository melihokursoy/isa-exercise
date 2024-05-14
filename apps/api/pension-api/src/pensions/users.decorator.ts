import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context);
        console.log(ctx.getContext().req?.headers?.auth)
        try {
            return JSON.parse(ctx.getContext().req?.headers?.auth)
        } catch (error) {
            return null
        }
    },
);