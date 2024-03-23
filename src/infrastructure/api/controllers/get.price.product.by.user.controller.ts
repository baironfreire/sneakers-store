import { Request, Response } from "express";
import { CaseGetPriceProductByUserPort } from "../../../application/ports/case.get.price.product.by.user.port";
import * as responseHandler from "../../../utils/http/response-handler";


export const getPriceProductByUserController = (
    caseUseGetPriceProductByUser: CaseGetPriceProductByUserPort
) => async(
    req: Request, 
    res: Response,
    dependencies: any, 
    _context: any
) => {
    try {
        return res.json(responseHandler.success(await caseUseGetPriceProductByUser(
            {
                userId:  req.params.user_id,
                productName: req.params.nombre_producto
            }, 
            dependencies
        )))
    } catch (error) {
        let httpError = responseHandler.handlerError(error);
        return res.status(httpError.statusCode).json(JSON.parse(httpError.message))
    }
} 