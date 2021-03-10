export type ConfigOptions = {
    server: ServerConfig,
    origin: string,
    loggerOptions: LoggerOptions,
    mysql: MySql
}

type MySql = {
    host: string,
    user: string,
    database: string,
    debug: boolean,
    connectionLimit: number,
}

export type ServerConfig = {
    apiContextPath: string,
    hostname: string,
    port: number,
    staticFolderPath: string,
    indexFile: string
}

export type LoggerOptions = {
    fileOptions: File,
    timeStampFormat: string,
    excludeUrlsFromLogger: string[]
}

export type File = {
    maxsize: number,
    maxFiles: number,
    filename: string
}