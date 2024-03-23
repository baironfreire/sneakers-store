import express from 'express';
import { GetPriceProductHttpHandler } from '../../../../handlers/get.price.product.by.user.handler';

const app = express();
app.get('/price/:user_id/:nombre_producto',  GetPriceProductHttpHandler);
module.exports = app;