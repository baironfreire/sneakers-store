"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBSpecialPriceRepository = void 0;
const special_prices_model_1 = __importDefault(require("../../domain/models/special-prices/special.prices.model"));
class MongoDBSpecialPriceRepository {
    async getSpecialPricesByIdUserAndBrand(userId, brand) {
        try {
            const specialPrices = await special_prices_model_1.default.findOne({
                'user_id': userId,
                'brand': brand
            }) || undefined;
            return specialPrices;
        }
        catch (error) {
            console.error("Error al obtener precios especiales:", error);
            throw error;
        }
    }
}
exports.MongoDBSpecialPriceRepository = MongoDBSpecialPriceRepository;
//# sourceMappingURL=mongodb.special.price.repository.js.map