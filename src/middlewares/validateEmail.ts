import { NextFunction, Request, Response } from 'express';
import emailSchema from '../schema/EmailSchema';

async function validateEmail(req: Request, _res: Response, next: NextFunction) {
  try {
    await emailSchema.validateAsync(req.body);

    return next();
  } catch (error) {
    next(error);
  }
}

export default validateEmail;
