import * as functions from 'firebase-functions';

import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import { DBconfig } from '../config/db.config';
import { SERVER } from './utils/constants';



export class Server {
    private app:Application;
    private port:string;
    constructor(){

        this.app = express();
        this.port = SERVER.PORT || '3000';
        //parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }));
        //parse aplication/json
        this.app.use(bodyParser.json());
        this.middlewares();
        this.configureRoutes();
        DBconfig.connect();
        
    }

    private middlewares() {
        // CORS
        this.app.use( cors() );
        // Lectura del body
        this.app.use( express.json() );
    }

    private configureRoutes() {
        // Define las rutas de productos
        this.app.use(require('./infrastructure/api/routes/product.routes'));
        this.app.use(require('./infrastructure/api/routes/price.routes'));

    } 

    firebaseFunction() {
        return functions.https.onRequest(this.app);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server corriendo en puerto' + this.port)
        })
    }
}


