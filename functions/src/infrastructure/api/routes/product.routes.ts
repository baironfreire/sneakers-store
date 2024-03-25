import express from 'express';
import { GetProductsHttpHandler } from '../../../../handlers/get.products.stock.handler';


const app = express();
app.get('/products',  GetProductsHttpHandler);
module.exports = app;