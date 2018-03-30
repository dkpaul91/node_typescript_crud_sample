import * as mongoose from 'mongoose';

import { configuration } from '../app.config';

export class DatabaseConnection {

    constructor() {
        mongoose.connect(configuration.dbUrl + configuration.dbName);
        mongoose.connection.on('connected', () => {
            console.log('Connected to database');
        });
        mongoose.connection.on('error', (err) => {
            console.log('Connection Error' + err);
        });
    }
}