"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseUseGetProductsInStock = void 0;
const http_code_response_1 = require("../../utils/http/http-code-response");
const utils_1 = require("../../utils/utils");
const caseUseGetProductsInStock = () => async (dependencies) => {
    const { mongoDBProductRepository } = dependencies;
    try {
        let products = await mongoDBProductRepository.getProductsInStock();
        if (utils_1.Utils.isEmpty(products)) {
            throw new Error(http_code_response_1.HTTP_CODES_RESPONSE.DATA_NOT_FOUND.code);
        }
        return products;
    }
    catch (error) {
        console.log('Error en el caso de uso', error);
        throw error;
    }
};
exports.caseUseGetProductsInStock = caseUseGetProductsInStock;
//# sourceMappingURL=case.get.products.stock.js.map