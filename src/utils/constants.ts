
export const TIMEZONE = 'America/Guatemala';
export const RESPONSE_DATE_FORMAT = 'YYYY-MM-DD[T]HH:mm:ss.SSS';
export const SERVER = {
    PORT: process.env.PORT || '3000'
}
export const MONGODB = {
    URL: process.env.MONGODB_CNN || "mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/sneakers-store?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin",
    DB_NAME: 'admin',
    OPTIONS: {
        USE_NEW_URL_PARSER: true,
        USE_UNIFIED_TOPOLOGY: true
    }
}

