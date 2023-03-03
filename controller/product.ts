import Products from '../models/productSchema';
import { Request, Response } from 'express';
import handleAsync from '../utils/asyncFunc';

export const getAllProducts = handleAsync(
  async (req: Request, res: Response) => {
    const products = await Products.find({});
    res.status(200).json(products);
  }
);

export const createProduct = handleAsync(
  async (req: Request, res: Response) => {
    const product = await Products.create(req.body);
    res.status(201).json(product);
  }
);
