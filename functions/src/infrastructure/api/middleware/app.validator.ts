import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ArraySchema, ObjectSchema } from 'joi';
import { HTTP_CODES_RESPONSE } from '../../../utils/http/http-code-response';
;

export interface AppValidatorOpts {
    pathSchema?: ObjectSchema,
    querySchema?: ObjectSchema;
    bodySchema?: ObjectSchema | ArraySchema;
    headerSchema?: ObjectSchema
}

const getErrors = (err: any) => {
    const errors: any[] = [];
    try {
      err.details.forEach((detail: any) => {
        const currentMessage = detail.message;
        detail.path.forEach((value: any) => {
          errors.push({ [value]: currentMessage });
        });
      });
    } catch (error: any) {
      console.error(error);
    }
    if (errors.length === 0) {
      errors.push(err["message"]);
    }
    return errors;
  }


  export const appValidator = (opts: AppValidatorOpts): RequestHandler => {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            if (opts.bodySchema) {
                const { error } = opts.bodySchema?.validate(req.body || {});
                if (error) {
                    throw error;
                }
            }
            if (opts.headerSchema) {
                const { error } = opts.headerSchema?.validate(req.headers || {});
                if (error) {
                    throw error;
                }
            }
            if (opts.pathSchema) {
                const { error } = opts.pathSchema?.validate(req.params || {});
                if (error) {
                    throw error;
                }
            }
            if (opts.querySchema) {
                const { error } = opts.querySchema?.validate(req.query || {});
                if (error) {
                    throw error;
                }
            }
            return next();
        } catch (error: any) {
            const errors = getErrors(error);
            return res.status(HTTP_CODES_RESPONSE.BAD_REQUEST.httpCode).json({
                code: HTTP_CODES_RESPONSE.BAD_REQUEST.code,
                message: HTTP_CODES_RESPONSE.BAD_REQUEST.message,
                errors : errors
            });
        }
    };
};