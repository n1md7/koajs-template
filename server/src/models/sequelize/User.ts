import BaseModelSequelize from '../BaseModelSequelize';
import model from '../../database/sequelize/schema/User';

export default class User extends BaseModelSequelize<typeof model> {
    constructor() {
        super(model);
    }

    public async addNewUser(): Promise<any> {
        return await this.model.create({
            username: 'bourbon',
            firstName: 'jack',
            lastName: 'cola'
        });
    }
}