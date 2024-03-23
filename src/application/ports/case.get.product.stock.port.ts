import { ProductRepositoryPort } from "./product.repository.port"

export type DependenciesType = {
    mongoDBProductRepository: ProductRepositoryPort
}

export type CaseGetProductsStockPort = (
    dependencies: DependenciesType
) => Promise<any>
