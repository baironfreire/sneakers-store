import mongoose from "mongoose";
import { MongoManager } from "./manager";

export class MongoManagerImpl implements MongoManager {
    private connection: mongoose.Connection;

    constructor(
        connectionString: string,
    ){
        mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        this.connection = mongoose.connection;

        this.connection.on("error", error => {
            console.error("MongoDB connection error:", error);
        });

        this.connection.once("open", () => {
            console.log("Connected to MongoDB!");
        });
    }

    async disconnect(): Promise<void> {
        await mongoose.disconnect();
    }

} 