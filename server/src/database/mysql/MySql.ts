import mysql from "mysql2/promise";
import config from "../../config";
import logWrite from "../../logger";

const initMySql = (mode: { debug: boolean } = {debug: false}): mysql.Pool => {

    const pool = mysql.createPool({
        host: process.env.MYSQL_HOST || config.mysql.host,
        user: process.env.MYSQL_USER || config.mysql.user,
        connectionLimit: Number(process.env.MYSQL_CONNECTION_LIMIT) || config.mysql.connectionLimit,
        database: process.env.MYSQL_DB || config.mysql.database,
        debug: config.mysql.debug,
        waitForConnections: true,
    });
    if (mode.debug) {
        logWrite.info(`MySql connection to database [${process.env.MYSQL_DB || config.mysql.database}] successfully established!`);
    }

    return pool;
};

export default initMySql;
