import Koa from "koa";
import serve from "koa-static";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import log from "../logger";
import routes from "../routes";
import ErrorHandler from "../middlewares/ErrorHandler";
import {Env} from "../types";
import {ConfigOptions} from "../types/config";
import {Server as httpServer} from "http";
import path from 'path';

export default class App {
    app: Koa;
    origin: string;
    config: ConfigOptions;
    staticFolderPath = path.join(__dirname, '../../../app/public');

    constructor(config: ConfigOptions) {
        this.app = new Koa();
        this.config = config;
        this.origin = config.cors;
    }

    init(): App {
        this.app.use(ErrorHandler.handle);
        this.app.use(serve(this.staticFolderPath));

        if (process.env.NODE_ENV !== Env.Prod) {
            this.origin = '*';
        }

        this.app.use(cors({
            origin: this.origin
        }));

        this.app.use(bodyParser());

        const router = routes(this.config);
        this.app.use(router.allowedMethods());
        this.app.use(router.routes());

        this.app.on('error', errorMessage => {
            log.error(errorMessage);
        });

        return this;
    }

    start(): httpServer {
        const {port, hostname, apiContextPath} = this.config.server;

        return this.app.listen(port, hostname, () => {
            log.debug(`Health-check - http://${hostname}:${port}/health-check`);
            log.debug(`Example API endpoint - http://${hostname}:${port}${apiContextPath}/v1/users`);
            log.debug('Server (re)started!');
        });
    }
}
