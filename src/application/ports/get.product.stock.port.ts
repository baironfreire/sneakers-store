import { ProductRepositoryPort } from "./product.repository.port"

export type DependenciesType = {
    mongoDBProductRepository: ProductRepositoryPort
}

export type GetProductsStockPort = (
    dependencies: DependenciesType
) => Promise<any>
