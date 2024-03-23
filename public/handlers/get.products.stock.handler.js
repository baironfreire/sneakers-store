"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpHandler = void 0;
const mongodb_product_repository_1 = require("../src/infrastructure/db/mongodb.product.repository");
const get_products_stock_controller_1 = require("../src/infrastructure/api/controllers/get.products.stock.controller");
const case_get_products_stock_1 = require("../src/application/cases/case.get.products.stock");
const dependencies = {
    mongoDBProductRepository: new mongodb_product_repository_1.MongoDBProductRepository()
};
const adapter = get_products_stock_controller_1.getProductsStockController(case_get_products_stock_1.caseUseGetProductsInStock());
const build = (controllerFunc) => {
    return [
        async (req, res, next) => {
            await controllerFunc(req, res, next);
        }
    ];
};
exports.httpHandler = build(async (req, res, _next) => adapter(req, res, dependencies, null));
//# sourceMappingURL=get.products.stock.handler.js.map