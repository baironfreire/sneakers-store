"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProductByName = void 0;
const http_code_response_1 = require("../http/http-code-response");
const utils_1 = require("../utils");
const findProductByName = async (dependencies, productName) => {
    const { mongoDBProductRepository } = dependencies;
    try {
        const product = await mongoDBProductRepository.findProductByName(productName);
        if (utils_1.Utils.isEmpty(product)) {
            throw new Error(http_code_response_1.HTTP_CODES_RESPONSE.PRODUCT_NOT_FOUND.code);
        }
        return product;
    }
    catch (error) {
        throw error;
    }
};
exports.findProductByName = findProductByName;
//# sourceMappingURL=fing.product.by.name.js.map