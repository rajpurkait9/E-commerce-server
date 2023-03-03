import { Router } from "express";
import { createProduct, getAllProducts, getOneProduct } from "../controller/product";
const prodouctRoute = Router();

prodouctRoute.get("/products", getAllProducts);
prodouctRoute.post("/createproduct",createProduct);
prodouctRoute.get("/product/:id",getOneProduct);

export default prodouctRoute;