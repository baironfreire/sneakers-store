import { Request, Response } from "express";
import { GetProductsStockPort } from "../../../application/ports/get.product.stock.port";
import  *  as responseHandler  from "../../../utils/http/response-handler";


export const getProductsStockController = (
    caseUseGetProductsInStock: GetProductsStockPort
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