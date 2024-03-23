"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const db_config_1 = require("../config/db.config");
const constants_1 = require("./utils/constants");
const app_1 = __importDefault(require("firebase/app"));
require("firebase/database"); // Importa los servicios de Firebase que vayas a utilizar
const firebase_config_1 = require("../config/firebase.config");
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = constants_1.SERVER.PORT || '3000';
        //parse application/x-www-form-urlencoded
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        //parse aplication/json
        this.app.use(body_parser_1.default.json());
        this.middlewares();
        this.configureRoutes();
        db_config_1.DBconfig.connect();
        app_1.default.initializeApp(firebase_config_1.firebaseConfig);
    }
    middlewares() {
        // CORS
        this.app.use(cors_1.default());
        // Lectura del body
        this.app.use(express_1.default.json());
    }
    configureRoutes() {
        // Define las rutas de productos
        this.app.use(require('./infrastructure/api/routes/product.routes'));
        this.app.use(require('./infrastructure/api/routes/price.routes'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server corriendo en puerto' + this.port);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map