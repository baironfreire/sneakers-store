"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const specialPriceSchema = new mongoose_1.Schema({
    user_id: { type: String, required: [true, 'El id del usuario es necesario'] },
    brand: { type: String, required: [true, 'La marca del producto es necesaria'] },
    special_price: { type: Number, required: true }
});
const SpecialPriceModel = mongoose_1.model('special_prices', specialPriceSchema);
exports.default = SpecialPriceModel;
//# sourceMappingURL=special.prices.model.js.map