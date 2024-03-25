

import createHttpError from "http-errors";
import { OutputWithData } from '../../domain/common';
import { UtilDate } from '../date/utils-date';
import * as httpCodeResponse from "./http-code-response";

export const success = (data?: any, message?: string ) => {
    const resp: OutputWithData<any> = {
        code: httpCodeResponse.HTTP_CODES_RESPONSE.SUCCESSFUL_OPERATION.code,
        message: message || httpCodeResponse.HTTP_CODES_RESPONSE.SUCCESSFUL_OPERATION.message,
        datetime: UtilDate.getResponseDate(),
        data
    }
    
    return  resp;
}


export const handlerError = (
    error: any
) => {
    console.log("error >>>",error.message);
    if (error.message) {
        const responsesCodes: any = httpCodeResponse.HTTP_CODES_RESPONSE;
        const responseError = Object.keys(responsesCodes)
            .filter((responseCode) => responsesCodes[`${responseCode}`].code == error.message);
        console.log("responseError", responseError)
        const body = {
            code: responsesCodes[`${responseError.toString()}`]?.code || httpCodeResponse.HTTP_CODES_RESPONSE.INTERNAL_ERROR.code,
            message: responsesCodes[`${responseError.toString()}`]?.message || httpCodeResponse.HTTP_CODES_RESPONSE.INTERNAL_ERROR.message
        };
        console.log('body>>>', body)
        return createHttpError(responsesCodes[`${responseError.toString()}`].httpCode, JSON.stringify(body));
    }
    return createHttpError(httpCodeResponse.HTTP_CODES_RESPONSE.INTERNAL_ERROR.httpCode, JSON.stringify(httpCodeResponse.HTTP_CODES_RESPONSE.INTERNAL_ERROR));
}




