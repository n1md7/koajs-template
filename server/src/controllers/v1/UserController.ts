import BaseController from './BaseController';
import {Context} from 'koa';
import User from "./User";
import UserModel from "../../models/mongo/UserModel";
import UserModelMySql from "../../models/mysql/UserModelMySql";
import UserModelSequelize from "../../models/sequelize/User";

class UserController extends BaseController implements User {
    public async user(ctx: Context): Promise<void> {
        const model = new UserModelMySql();
        ctx.body = await model.getOneUser();
    }

    public async users(ctx: Context): Promise<void> {
        const model = new UserModel();
        ctx.body = await model.getAllUsers();
    }

    public async createNewUser(ctx: Context): Promise<void>{
        const model = new UserModelSequelize();
        ctx.body = await model.addNewUser();
    }
}

export default new UserController;
