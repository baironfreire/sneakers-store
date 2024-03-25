import { HTTP_CODES_RESPONSE } from "../../utils/http/http-code-response";
import { Utils } from "../../utils/utils";
import { CaseGetProductsStockPort } from "../ports/case.get.product.stock.port";



export const caseUseGetProductsInStock = (): CaseGetProductsStockPort => async (
    dependencies
) => {
    const {
        mongoDBProductRepository
    } = dependencies;

    try{
        let products = await mongoDBProductRepository.getProductsInStock();
        if(Utils.isEmpty(products)){
            throw new Error(HTTP_CODES_RESPONSE.DATA_NOT_FOUND.code);
        }
        return products;
    }catch(error){
        console.log('Error en el caso de uso', error);
        throw error
    }
}