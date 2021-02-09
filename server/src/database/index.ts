import mongoose from 'mongoose';
import log from '../logger';

const initDatabase = async (): Promise<void> => {
    const {MONGO_URL, MONGO_DB_NAME} = process.env;
    const mongoOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    };
    await mongoose.connect(`${MONGO_URL}/${MONGO_DB_NAME}`, mongoOptions)
        .catch((error) => {
            log.info(`Connection string is "${MONGO_URL}/${MONGO_DB_NAME}"`);
            throw new Error(error.message || error);
        });
    log.info('Database connection established successfully');
};

export default initDatabase;
