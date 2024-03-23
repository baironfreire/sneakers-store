import { NextFunction, Request, RequestHandler, Response } from "express";

import { caseUseGetPriceProductByUser } from "../src/application/cases/case.get.price.product.by.user";
import { DependenciesType } from "../src/application/ports/case.get.price.product.by.user.port";
import { getPriceProductByUserController } from "../src/infrastructure/api/controllers/get.price.product.by.user.controller";
import { MongoDBProductRepository } from "../src/infrastructure/db/mongodb.product.repository";
import { MongoDBSpecialPriceRepository } from "../src/infrastructure/db/mongodb.special.price.repository";

const dependencies: DependenciesType = {
    mongoDBSpecialPriceRepository: new MongoDBSpecialPriceRepository(),
    mongoDBProductRepository: new MongoDBProductRepository()
};
const adapter  = getPriceProductByUserController(caseUseGetPriceProductByUser());


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

export const GetPriceProductHttpHandler = build(async(req, res, _next)=> adapter(req, res, dependencies, null))
