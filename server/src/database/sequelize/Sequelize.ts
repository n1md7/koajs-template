import {Sequelize} from "sequelize";
import logWrite from '../../logger';

const connection = new Sequelize({
    dialect: "mysql",
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB,
    password: process.env.MYSQL_PASS,
    port: Number(process.env.MYSQL_PORT),
});

//connection.authenticate()
//    .then(function () {
//        logWrite.info(`MySql connection to database [${process.env.MYSQL_DB}] successfully established!`);
//    });

export default connection;