import { Context } from "koa";

export default interface UserInterface {
    user: (ctx: Context) => Promise<void>,
    users: (ctx: Context) => Promise<void>,
}