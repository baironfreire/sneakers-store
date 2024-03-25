import { Utils } from "../../utils/utils";
import { findProductByName } from "../../utils/utils-case/fing.product.by.name";
import { fnCalSpecialPrice } from "../../utils/utils-case/fn.cal.special.price";
import { CaseGetPriceProductByUserPort } from "../ports/case.get.price.product.by.user.port";



export const caseUseGetPriceProductByUser = ():CaseGetPriceProductByUserPort => async(
    input,
    dependencies
) => {
    const {
        mongoDBSpecialPriceRepository,
    } = dependencies;

    const {productName, userId} = input;
    try {
        const product:any = await findProductByName(dependencies, productName);
        const { brand, price } = product;

        const specialPriceUser:any = await mongoDBSpecialPriceRepository.getSpecialPricesByIdUserAndBrand(
            userId,
            brand
        );
        if(Utils.isEmpty(specialPriceUser)){
            return {
                price: price,
                brand
            }
        }
        const { special_price } = specialPriceUser;
        return {
            price: await fnCalSpecialPrice(price, special_price ),
            brand
        }

    } catch (error) {
        console.log('Error en el caso de uso', error);
        throw error
    }
}