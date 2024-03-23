"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsStockController = void 0;
const responseHandler = __importStar(require("../../../utils/http/response-handler"));
const getProductsStockController = (caseUseGetProductsInStock) => async (_req, res, dependencies, _context) => {
    try {
        return res.json(responseHandler.success(await caseUseGetProductsInStock(dependencies)));
    }
    catch (error) {
        let httpError = responseHandler.handlerError(error);
        return res.status(httpError.statusCode).json(JSON.parse(httpError.message));
    }
};
exports.getProductsStockController = getProductsStockController;
//# sourceMappingURL=get.products.stock.controller.js.map