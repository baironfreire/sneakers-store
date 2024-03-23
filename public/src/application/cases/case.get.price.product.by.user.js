"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseUseGetPriceProductByUser = void 0;
const utils_1 = require("../../utils/utils");
const fing_product_by_name_1 = require("../../utils/utils-case/fing.product.by.name");
const fn_cal_special_price_1 = require("../../utils/utils-case/fn.cal.special.price");
const caseUseGetPriceProductByUser = () => async (input, dependencies) => {
    const { mongoDBSpecialPriceRepository, } = dependencies;
    const { productName, userId } = input;
    try {
        const product = await fing_product_by_name_1.findProductByName(dependencies, productName);
        const { brand, price } = product;
        const specialPriceUser = await mongoDBSpecialPriceRepository.getSpecialPricesByIdUserAndBrand(userId, brand);
        if (utils_1.Utils.isEmpty(specialPriceUser)) {
            return {
                price: price,
                brand
            };
        }
        const { special_price } = specialPriceUser;
        return {
            price: await fn_cal_special_price_1.fnCalSpecialPrice(price, special_price),
            brand
        };
    }
    catch (error) {
        console.log('Error en el caso de uso', error);
        throw error;
    }
};
exports.caseUseGetPriceProductByUser = caseUseGetPriceProductByUser;
//# sourceMappingURL=case.get.price.product.by.user.js.map