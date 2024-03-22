import { IProduct, Product } from "../../../domain/models/product/product.model";
import { ProductManager } from "./manager";
import { MongoManagerImpl } from '../mongo-db/manager.impl';

export class ProductManagerImpl extends MongoManagerImpl implements ProductManager {

    constructor(
        connectionString: string
    ){
        super(connectionString)
    }

    async getProductsInStock(): Promise<IProduct[]> {
        try {            
            const products: IProduct[] = await  Product.find({stock: {$gt: 0}});
            this.disconnect();
            return products
        } catch (error) {
            console.error("Error al obtener los productos en stock:", error);
            throw error;
        }
    }

}