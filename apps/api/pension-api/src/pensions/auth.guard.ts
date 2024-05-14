import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context);
        const request = await ctx.getContext().req;
        const auth = this.extractAuthFromHeader(request);
        if (!auth) {
            throw new UnauthorizedException();
        }
        try {
            request['auth'] = auth;
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }

    private extractAuthFromHeader(request: Request): any | undefined {
        return request?.headers?.auth ? request?.headers?.auth : undefined;
    }
}