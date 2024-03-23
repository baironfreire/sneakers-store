import { ProductRepositoryPort } from "./product.repository.port";
import { SpecialPriceRepositoryPort } from "./special.price.repository.port";

export type DependenciesType = {
    mongoDBSpecialPriceRepository: SpecialPriceRepositoryPort
    mongoDBProductRepository: ProductRepositoryPort
}


export type CaseGetPriceProductByUserPort = (
    input: any,
    dependencies: DependenciesType
) => Promise<any>;