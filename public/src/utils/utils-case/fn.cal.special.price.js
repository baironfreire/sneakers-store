"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fnCalSpecialPrice = void 0;
const fnCalSpecialPrice = async (initPrice, discountPorcentage) => {
    try {
        return (initPrice - (initPrice * (discountPorcentage / 100)));
    }
    catch (error) {
        throw error;
    }
};
exports.fnCalSpecialPrice = fnCalSpecialPrice;
//# sourceMappingURL=fn.cal.special.price.js.map