"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_products_stock_handler_1 = require("../../../../handlers/get.products.stock.handler");
const app = express_1.default();
app.get('/products', get_products_stock_handler_1.httpHandler);
module.exports = app;
//# sourceMappingURL=product.routes.js.map