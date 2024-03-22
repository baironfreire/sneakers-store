import { IProduct } from "../../../domain/models/product/product.model";

export interface ProductManager {
    getProductsInStock(): Promise<Array<IProduct>>;
}