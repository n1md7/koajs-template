import Joi from 'joi';

export const createUserSchema = Joi.object({
    username: Joi.string().min(5).max(32).required(),
    password: Joi.string().min(8).max(128).required(),
    confirmPassword: Joi.string().min(8).max(128).required(),
    email: Joi.string().min(6).max(128).required(),
});

export const authUserSchema = Joi.object({
    username: Joi.string().min(5).max(32).required(),
    password: Joi.string().min(8).max(128).required(),
});
