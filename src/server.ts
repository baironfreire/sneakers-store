import express, { Application } from 'express';
import { SERVER } from './utils/constants';

export class Server {
    private app:Application;
    private port:string;
    constructor(){
        this.app = express();
        this.port = SERVER.PORT || '3000';
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server corriendo en puerto' + this.port)
        })
    }
}

