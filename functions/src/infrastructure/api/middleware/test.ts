import Joi from 'joi';
import { AppValidatorOpts } from './app.validator';
const opts: AppValidatorOpts = {
    pathSchema: Joi.object({
        user_id: Joi.number().required(),
        nombre_producto: Joi.string().required()
    })
}

const req = {
    params: { user_id: '12345a', nombre_producto: ':nombre_producto' }
}

if (opts.pathSchema) {
    console.log('pathSchema', 'color: #007acc;', req.params);
    const { error } = opts.pathSchema?.validate(req.params || {});
    console.log('error', error)
}