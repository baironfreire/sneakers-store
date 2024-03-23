"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBconfig = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("../src/utils/constants");
class DBconfig {
    static async connect() {
        try {
            await mongoose_1.default.connect(constants_1.MONGODB.URL, {
                useNewUrlParser: constants_1.MONGODB.OPTIONS.USE_NEW_URL_PARSER,
                useUnifiedTopology: constants_1.MONGODB.OPTIONS.USE_UNIFIED_TOPOLOGY
            });
            mongoose_1.default.connection.on("error", error => {
                console.error("MongoDB connection error:", error);
            });
            mongoose_1.default.connection.once("open", () => {
                console.log("Connected to MongoDB!");
            });
            return mongoose_1.default.connection;
        }
        catch (error) {
            console.log("Error Connected to MongoDB!", error);
            throw error;
        }
    }
    static async disconnect() {
        await mongoose_1.default.disconnect();
    }
}
exports.DBconfig = DBconfig;
//# sourceMappingURL=db.config.js.map