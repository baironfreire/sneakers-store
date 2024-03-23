"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB = exports.SERVER = exports.RESPONSE_DATE_FORMAT = exports.TIMEZONE = void 0;
exports.TIMEZONE = 'America/Guatemala';
exports.RESPONSE_DATE_FORMAT = 'YYYY-MM-DD[T]HH:mm:ss.SSS';
exports.SERVER = {
    PORT: process.env.PORT || '3000'
};
exports.MONGODB = {
    URL: process.env.MONGODB_CNN || "mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/sneakers-store?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin",
    DB_NAME: 'admin',
    OPTIONS: {
        USE_NEW_URL_PARSER: true,
        USE_UNIFIED_TOPOLOGY: true
    }
};
//# sourceMappingURL=constants.js.map