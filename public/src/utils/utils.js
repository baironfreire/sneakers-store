"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
//@ts-ignore
class Utils {
    static isEmpty(value) {
        if (value === undefined || value === null || value === "") {
            return true;
        }
        if (Array.isArray(value) === true) {
            return value.length === 0;
        }
        if ((typeof value === 'object') && Object.keys(value).length === 0) {
            return true;
        }
        return false;
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map