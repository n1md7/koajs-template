export type ConfigOptions = {
    server: ServerConfig,
    origin: string,
    loggerOptions: LoggerOptions,
    mysql: {
        debug: boolean,
    },
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