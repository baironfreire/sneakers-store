import { Document, Schema, model } from 'mongoose';


const specialPriceSchema = new Schema({
    user_id: { type: String, required: [true, 'El id del usuario es necesario'] },
    brand: { type: String, required: [true, 'La marca del producto es necesaria'] },
    special_price: { type: Number, required: true }
});

export interface ISpecialPrice extends Document {
    user_id: string;
    brand: string;
    special_price: number;
}
const SpecialPriceModel =  model<ISpecialPrice>('special_prices', specialPriceSchema);
export default  SpecialPriceModel;