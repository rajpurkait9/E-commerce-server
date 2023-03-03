import Products from '../models/productSchema';
import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandle';
import { StatusCode } from '../middleware/error';

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await Products.find({});
    res.status(200).json(products);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await Products.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};

export const getOneProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const oneProduct = await Products.findById({ _id: id });
  if (!oneProduct) {
    return next(
      new ErrorHandler({
        statusCode: StatusCode.BAD_REQUEST,
        message: 'product not found',
      })
    );
  }
  res.status(200).json(oneProduct);
};
