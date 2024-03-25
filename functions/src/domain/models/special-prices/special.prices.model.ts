import { Document, Schema, model } from 'mongoose';

// Define el esquema del precio especial
const specialPriceSchema = new Schema({
    user_id: { type: String, required: [true, 'El id del usuario es necesario'] },
    brand: { type: String, required: [true, 'La marca del producto es necesaria'] },
    special_price: { type: Number, required: true }
});

// Define la interfaz del precio especial extendiendo Document
export interface ISpecialPrice extends Document {
    user_id: string;
    brand: string;
    special_price: number;
}

// Define el modelo del precio especial utilizando el esquema y la interfaz
const SpecialPriceModel = model<ISpecialPrice>('special_prices', specialPriceSchema);

// Exporta el modelo
export default SpecialPriceModel;
