import { Router } from 'express';
import { createProduct, getAllProducts } from '../controller/product';
const prodouctRoute = Router();

prodouctRoute.get('/products', getAllProducts);
prodouctRoute.post('/createproduct', createProduct);

export default prodouctRoute;
