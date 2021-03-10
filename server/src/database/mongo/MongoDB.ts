import mongoose from 'mongoose';
import logWrite from '../../logger';

const initMongoDB = async (): Promise<typeof mongoose> => {
    const {MONGO_URL, MONGO_DB_NAME} = process.env;
    const mongoOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    };
    await mongoose.connect(`${MONGO_URL}/${MONGO_DB_NAME}`, mongoOptions)
        .catch((error) => {
            logWrite.info(`Connection string is "${MONGO_URL}/${MONGO_DB_NAME}"`);
            throw new Error(error.message || error);
        });
    logWrite.info(`MongoDB connection to database [${MONGO_DB_NAME}] successfully established!`);

    return mongoose;
};

export default initMongoDB;
