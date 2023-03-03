import ErrorHandler from '../utils/errorHandle';
import { Response, Request, NextFunction } from 'express';

export enum StatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
}
const ErrorHandling = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode;
  err.message = err.message;

  res.status(err.statusCode).json(err.message);
};
export default ErrorHandling;
