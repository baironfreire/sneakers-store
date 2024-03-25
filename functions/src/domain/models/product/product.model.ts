import { Document, Schema, model } from 'mongoose';

// Define el esquema del producto
const productSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es necesario'] },
    description: { type: String, required: [true, 'El precio unitario es necesario'] },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    brand: { type: String, required: [true, 'La marca es necesaria'] },
});

// Define la interfaz del producto extendiendo Document
export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    stock: number;
    brand: string;
}

// Define el modelo del producto utilizando el esquema y la interfaz
const ProductModel = model<IProduct>('Products', productSchema);

// Exporta el modelo
export default ProductModel;
