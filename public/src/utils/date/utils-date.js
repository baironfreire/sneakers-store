"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilDate = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const constants_1 = require("../constants");
class UtilDate {
    static getResponseDate() {
        return moment_timezone_1.default((new Date().getTime())).tz(constants_1.TIMEZONE).format(constants_1.RESPONSE_DATE_FORMAT);
    }
}
exports.UtilDate = UtilDate;
//# sourceMappingURL=utils-date.js.map