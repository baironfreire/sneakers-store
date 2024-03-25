
import { ProductRepositoryPort } from "../../application/ports/product.repository.port";
import ProductModel, { IProduct } from "../../domain/models/product/product.model";

export class MongoDBProductRepository implements ProductRepositoryPort {

    async findProductByName(name: string): Promise<IProduct|undefined> {
        try {            
            const product:IProduct|undefined = await  ProductModel.findOne({
                'name': new RegExp(name, 'i') ,
                'stock': {$gt: 0}
              }) || undefined;
            return product
        } catch (error) {
            console.error("Error al obtener producto por nombre", error);
            throw error;
        }
    }

    async getProductsInStock(): Promise<IProduct[]> {
        try {            
            const products: IProduct[] = await  ProductModel.find({stock: {$gt: 0}});
            return products
        } catch (error) {
            console.error("Error al obtener los productos en stock:", error);
            throw error;
        }
    }
    
}