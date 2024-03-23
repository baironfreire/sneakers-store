"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'El nombre es necesario'] },
    description: { type: Number, required: [true, 'El precio únitario es necesario'] },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    brand: { type: String, required: [true, 'La marca es necesaria'] },
});
const ProductModel = mongoose_1.model('Products', productSchema);
exports.default = ProductModel;
//# sourceMappingURL=product.model.js.map