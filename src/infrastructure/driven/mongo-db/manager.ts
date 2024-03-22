export interface MongoManager {
    disconnect(): Promise<void>;
}