"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_price_product_by_user_handler_1 = require("../../../../handlers/get.price.product.by.user.handler");
const app = express_1.default();
app.get('/price/:user_id/:nombre_producto', get_price_product_by_user_handler_1.GetPriceProductHttpHandler);
module.exports = app;
//# sourceMappingURL=price.routes.js.map