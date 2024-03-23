"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBProductRepository = void 0;
const product_model_1 = __importDefault(require("../../domain/models/product/product.model"));
class MongoDBProductRepository {
    async findProductByName(name) {
        try {
            const product = await product_model_1.default.findOne({
                'name': name,
                'stock': { $gt: 0 }
            }) || undefined;
            return product;
        }
        catch (error) {
            console.error("Error al obtener producto por nombre", error);
            throw error;
        }
    }
    async getProductsInStock() {
        try {
            const products = await product_model_1.default.find({ stock: { $gt: 0 } });
            return products;
        }
        catch (error) {
            console.error("Error al obtener los productos en stock:", error);
            throw error;
        }
    }
}
exports.MongoDBProductRepository = MongoDBProductRepository;
//# sourceMappingURL=mongodb.product.repository.js.map