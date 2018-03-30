import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { AppRoutes } from './routes/app.routes';
import { DatabaseConnection } from './database/database.connection';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        let connection = new DatabaseConnection();
        this.middleware();
    }

    private middleware(): void {
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use('/', new AppRoutes().router);
    }

}

export default new App().app;