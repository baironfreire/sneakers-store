import { Document, Schema, model } from 'mongoose';


const productSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es necesario'] },
    description: { type: Number, required: [true, 'El precio únitario es necesario'] },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    brand: { type: String, required: [true, 'La marca es necesaria'] },
});

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    stock: number;
    brand: string;

}
const ProductModel =  model<IProduct>('Products', productSchema);
export default  ProductModel;