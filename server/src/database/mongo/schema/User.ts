import {Schema} from "mongoose";

const collectionName = 'users';
const UserSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String
});

export {
    UserSchema,
    collectionName,
};
