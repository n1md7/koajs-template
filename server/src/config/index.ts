export default {
    server: {
        apiContextPath: '/api',
        hostname: '0.0.0.0',
        port: 8080
    },
    cors: '*.domain.com',
    loggerOptions: {
        fileOptions: {
            maxsize: 100000000,
            maxFiles: 7,
            filename: process.env.LOGFILE || 'logs/app.log'
        },
        timeStampFormat: 'YYYY-MM-DD HH:mm:ss:ms',
        excludeUrlsFromLogger: ['/health-check']
    }
}
