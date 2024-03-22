import { Document, Schema, model } from 'mongoose';


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
const ProductModel =  model<IProduct>('Products', productSchema);
export default  ProductModel;