import { NextFunction, Request, RequestHandler, Response } from "express";
import { caseUseGetPriceProductByUser } from "../src/application/cases/case.get.price.product.by.user";
import { DependenciesType } from "../src/application/ports/case.get.price.product.by.user.port";
import { getPriceProductByUserController } from "../src/infrastructure/api/controllers/get.price.product.by.user.controller";
import { MongoDBProductRepository } from "../src/infrastructure/db/mongodb.product.repository";
import { MongoDBSpecialPriceRepository } from "../src/infrastructure/db/mongodb.special.price.repository";
import { appValidator } from "../src/infrastructure/api/middleware/app.validator";
import Joi from "joi";

const pathSchema = {
    pathSchema: Joi.object({
        user_id: Joi.number().required(),
        nombre_producto: Joi.string().required()
    }).required()
}

const dependencies: DependenciesType = {
    mongoDBSpecialPriceRepository: new MongoDBSpecialPriceRepository(),
    mongoDBProductRepository: new MongoDBProductRepository()
};
const adapter = getPriceProductByUserController(caseUseGetPriceProductByUser());

const build: (
    validatorMiddleware: RequestHandler,
    controllerFunc: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => RequestHandler[] = (
    validatorMiddleware: RequestHandler,
    controllerFunc: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler[] => {
    return [
        validatorMiddleware,
        async (
            req: Request,
            res: Response,
            next: NextFunction
        ) => {
            try {
                await controllerFunc(req, res, next);
            } catch (error) {
                next(error);
            }
        }
    ];
}

export const GetPriceProductHttpHandler = build(
    async (req: Request, res: Response, next: NextFunction) =>  await appValidator(pathSchema)(req, res, next),
    async (req: Request, res: Response, _next: NextFunction) => await adapter(req, res, dependencies, null)
);
