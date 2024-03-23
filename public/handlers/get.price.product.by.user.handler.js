"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPriceProductHttpHandler = void 0;
const case_get_price_product_by_user_1 = require("../src/application/cases/case.get.price.product.by.user");
const get_price_product_by_user_controller_1 = require("../src/infrastructure/api/controllers/get.price.product.by.user.controller");
const mongodb_product_repository_1 = require("../src/infrastructure/db/mongodb.product.repository");
const mongodb_special_price_repository_1 = require("../src/infrastructure/db/mongodb.special.price.repository");
const dependencies = {
    mongoDBSpecialPriceRepository: new mongodb_special_price_repository_1.MongoDBSpecialPriceRepository(),
    mongoDBProductRepository: new mongodb_product_repository_1.MongoDBProductRepository()
};
const adapter = get_price_product_by_user_controller_1.getPriceProductByUserController(case_get_price_product_by_user_1.caseUseGetPriceProductByUser());
const build = (controllerFunc) => {
    return [
        async (req, res, next) => {
            await controllerFunc(req, res, next);
        }
    ];
};
exports.GetPriceProductHttpHandler = build(async (req, res, _next) => adapter(req, res, dependencies, null));
//# sourceMappingURL=get.price.product.by.user.handler.js.map