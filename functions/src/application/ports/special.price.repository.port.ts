import { ISpecialPrice } from '../../domain/models/special-prices/special.prices.model';

export interface SpecialPriceRepositoryPort {

    getSpecialPricesByIdUserAndBrand(
        userId: string,
        brand:string
    ):Promise<ISpecialPrice | undefined>;
}