import { Request, Response } from "express";
import { CaseGetProductsStockPort } from "../../../application/ports/case.get.product.stock.port";
import  *  as responseHandler  from "../../../utils/http/response-handler";


export const getProductsStockController = (
    caseUseGetProductsInStock: CaseGetProductsStockPort
) => async(
    _req: Request, 
    res: Response,
    dependencies: any, 
    _context: any
) => {
    try {
        return res.json(responseHandler.success(await caseUseGetProductsInStock(dependencies)))
    } catch (error) {
        let httpError = responseHandler.handlerError(error);
        return res.status(httpError.statusCode).json(JSON.parse(httpError.message))
    }
} 