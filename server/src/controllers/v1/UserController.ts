import BaseController from './BaseController';
import {Context} from 'koa';
import User from "./User";

class UserController extends BaseController implements User {
    public async user(ctx: Context): Promise<void> {
        ctx.body = {
            name: 'nimda'
        };
    }

    public async users(ctx: Context): Promise<void> {
        ctx.body = ['nimda', 'admin', 'koa'];
    }
}

export default new UserController;
