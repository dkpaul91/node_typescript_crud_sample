import * as http from 'http';

import app from '../app';
import { configuration } from '../app.config';

const port = normalizePort(configuration.port);
app.set('port', port);

function normalizePort(val: string) {
    let port = parseInt(val);

    if (isNaN(port)) {
        return val;
    }

    if (port > 0) {
        return port;
    }

    return false;
}

const server = http.createServer(app);

server.listen(port);
server.on('listening', () => {
    console.log('Server started on port', port);
});