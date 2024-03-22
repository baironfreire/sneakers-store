import { Document, Model, Schema, model } from 'mongoose';


const productSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es necesario'] },
    description: { type: Number, required: [true, 'El precio únitario es necesario'] },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
});

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    stock: number;

}

export const Product:Model<IProduct> = model<IProduct>('Product', productSchema);