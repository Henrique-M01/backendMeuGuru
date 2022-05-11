import { NextFunction, Request, Response } from 'express';
import nameSchema from '../schema/NameSchema';

async function validateName(req: Request, _res: Response, next: NextFunction) {
  try {
    await nameSchema.validateAsync(req.body);

    return next();
  } catch (error) {
    next(error);
  }
}

export default validateName;