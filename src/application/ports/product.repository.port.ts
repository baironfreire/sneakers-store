import { IProduct } from '../../domain/models/product/product.model';

export interface ProductRepositoryPort {
    /**
     * Obtenemos los productos que aun esten en stock
     */
    getProductsInStock():Promise<IProduct[]>;
}