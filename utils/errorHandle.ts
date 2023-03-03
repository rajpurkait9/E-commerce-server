import { StatusCode } from '../middleware/error';

interface ErrorArgs {
  statusCode: StatusCode;
  message: string;
}
export default class ErrorHandler extends Error {
  statusCode: StatusCode;

  constructor(args: ErrorArgs) {
    super(args.message);
    this.statusCode = args.statusCode;

    Error.captureStackTrace(this);
  }
}
