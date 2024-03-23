"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerError = exports.success = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const utils_date_1 = require("../date/utils-date");
const httpCodeResponse = __importStar(require("./http-code-response"));
const success = (data, message) => {
    const resp = {
        code: httpCodeResponse.HTTP_CODES_RESPONSE.SUCCESSFUL_OPERATION.code,
        message: message || httpCodeResponse.HTTP_CODES_RESPONSE.SUCCESSFUL_OPERATION.message,
        datetime: utils_date_1.UtilDate.getResponseDate(),
        data
    };
    return resp;
};
exports.success = success;
const handlerError = (error) => {
    var _a, _b;
    console.log("error >>>", error.message);
    if (error.message) {
        const responsesCodes = httpCodeResponse.HTTP_CODES_RESPONSE;
        const responseError = Object.keys(responsesCodes)
            .filter((responseCode) => responsesCodes[`${responseCode}`].code == error.message);
        console.log("responseError", responseError);
        const body = {
            code: ((_a = responsesCodes[`${responseError.toString()}`]) === null || _a === void 0 ? void 0 : _a.code) || httpCodeResponse.HTTP_CODES_RESPONSE.INTERNAL_ERROR.code,
            message: ((_b = responsesCodes[`${responseError.toString()}`]) === null || _b === void 0 ? void 0 : _b.message) || httpCodeResponse.HTTP_CODES_RESPONSE.INTERNAL_ERROR.message
        };
        console.log('body>>>', body);
        return http_errors_1.default(responsesCodes[`${responseError.toString()}`].httpCode, JSON.stringify(body));
    }
    return http_errors_1.default(httpCodeResponse.HTTP_CODES_RESPONSE.INTERNAL_ERROR.httpCode, JSON.stringify(httpCodeResponse.HTTP_CODES_RESPONSE.INTERNAL_ERROR));
};
exports.handlerError = handlerError;
//# sourceMappingURL=response-handler.js.map