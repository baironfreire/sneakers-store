import mongoose from "mongoose";
import { MONGODB } from '../src/utils/constants';

export class DBconfig {

    public static async connect(): Promise<any> {
        try {
            await mongoose.connect(MONGODB.URL, { 
                useNewUrlParser: MONGODB.OPTIONS.USE_NEW_URL_PARSER, 
                useUnifiedTopology: MONGODB.OPTIONS.USE_UNIFIED_TOPOLOGY 
            });
            
            mongoose.connection.on("error", error => {
                console.error("MongoDB connection error:", error);
            });
    
            mongoose.connection.once("open", () => {
                console.log("Connected to MongoDB!");
            });

            return mongoose.connection; 
        } catch (error) {
            console.log("Error Connected to MongoDB!", error);
            throw error
        }
    }

    public static async disconnect(): Promise<void> {
        await mongoose.disconnect();
    }

}