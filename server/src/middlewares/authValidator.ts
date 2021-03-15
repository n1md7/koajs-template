import {Context, Next} from 'koa';
import JsonWebToken from "jsonwebtoken";
import {JwtPayload} from '../controllers/v1/UserController';

export default async function authValidator(ctx: Context, next: Next): Promise<void> {
    ctx.store = ctx.store || {};
    const token = ctx.get(process.env.JWT_HEADER_NAME);
    // verify token
    ctx.store = await JsonWebToken.verify(token) as JwtPayload;

    await next();
}
