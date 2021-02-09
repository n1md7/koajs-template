export type ConfigOptions = {
    server: ServerConfig,
    cors: string,
    loggerOptions: LoggerOptions
}

export type ServerConfig = {
    apiContextPath: string,
    hostname: string,
    port: number
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