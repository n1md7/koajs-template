import BaseController from './BaseController';
import {Context} from 'koa';
import UserInterface from "./UserInterface";
import UserModel from "../../models/mongo/UserModel";
import UserModelSequelize, {UserType} from "../../models/sequelize/UserModel";
import {createUserSchema, authUserSchema} from './validators/UserRequestValidator';
import {HttpCode} from '../../types/errorHandler';
import JsonWebToken from 'jsonwebtoken';

export type JwtPayload = {
    username: string;
    email: string;
    userId: number;
};

class UserController extends BaseController implements UserInterface {
    public async user(ctx: Context): Promise<void> {
        ctx.body = 'ups...';
    }

    public async status(ctx: Context): Promise<void> {
        ctx.status = 200;
    }

    public async users(ctx: Context): Promise<void> {
        const model = new UserModel();
        ctx.body = await model.getAllUsers();
    }

    public async createNewUser(ctx: Context): Promise<void> {
        const validation = createUserSchema.validate(ctx.request.body);
        if (validation.error) {
            throw new Error(validation.error.details.pop().message);
        }
        if (validation.value.password !== validation.value.confirmPassword) {
            throw new Error("'password' and 'confirmPassword' didn't match!");
        }
        const model = new UserModelSequelize();
        await model.addNewUser(validation.value);

        ctx.status = HttpCode.created;
    }

    public async authenticateUser(ctx: Context): Promise<void | typeof ctx.status> {
        const validation = authUserSchema.validate(ctx.request.body);
        if (validation.error) {
            throw new Error(validation.error.details.pop().message);
        }
        const model = new UserModelSequelize();
        const user = await model.credentialsAreValid(validation.value) as UserType;
        if (!user) {
            return ctx.status = HttpCode.unauthorized;
        }

        // Generate JsonWebToke for authentication
        const payload: JwtPayload = {
            userId: user.id,
            username: user.username,
            email: user.email
        };

        ctx.body = JsonWebToken.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN,
            }
        );
    }
}

export default new UserController;
