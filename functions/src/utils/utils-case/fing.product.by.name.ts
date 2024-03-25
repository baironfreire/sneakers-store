import { HTTP_CODES_RESPONSE } from "../http/http-code-response";
import { Utils } from "../utils";

export const findProductByName = async (
    dependencies:any,
    productName: string
) => {
    const {
        mongoDBProductRepository
    } = dependencies;
    try {
        const product:any = await mongoDBProductRepository.findProductByName(productName);
        if(Utils.isEmpty(product)){
            throw new Error(HTTP_CODES_RESPONSE.PRODUCT_NOT_FOUND.code)
        }
        return product;     
    } catch (error) {
        throw error;
    }
}