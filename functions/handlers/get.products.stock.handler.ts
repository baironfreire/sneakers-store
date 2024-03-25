import { NextFunction, Request, RequestHandler, Response } from "express";
import { DependenciesType } from "../src/application/ports/case.get.product.stock.port";
import { MongoDBProductRepository } from "../src/infrastructure/db/mongodb.product.repository";
import { getProductsStockController } from "../src/infrastructure/api/controllers/get.products.stock.controller";
import { caseUseGetProductsInStock } from "../src/application/cases/case.get.products.stock";

const dependencies: DependenciesType = {
    mongoDBProductRepository: new MongoDBProductRepository()
};
const adapter  = getProductsStockController(caseUseGetProductsInStock());


const build: (
    controllerFunc: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => RequestHandler[] = (
    controllerFunc: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler[] => {
    return [
       async (
        req: Request, 
        res: Response, 
        next: NextFunction
       ) => {
        await controllerFunc(req, res, next);
       }
    ]
}

export const GetProductsHttpHandler = build(async(req, res, _next)=> adapter(req, res, dependencies, null))
