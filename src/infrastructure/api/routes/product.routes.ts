import express from 'express';
import { httpHandler } from '../../../../handlers/get.products.stock.handler';

const app = express();
app.get('/products',  httpHandler);
module.exports = app;