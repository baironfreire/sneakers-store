
import { SpecialPriceRepositoryPort } from "../../application/ports/special.price.repository.port";
import SpecialPriceModel, { ISpecialPrice } from "../../domain/models/special-prices/special.prices.model";

export class MongoDBSpecialPriceRepository implements SpecialPriceRepositoryPort {

    
    async getSpecialPricesByIdUserAndBrand(
        userId:string,
        brand:string
    ): Promise<ISpecialPrice|undefined> {
        try {     
            const specialPrices = await  SpecialPriceModel.findOne({
                'user_id': userId,
                'brand': brand
              }) || undefined;
            return specialPrices;
        } catch (error) {
            console.error("Error al obtener precios especiales:", error);
            throw error;
        }
    }
    
}