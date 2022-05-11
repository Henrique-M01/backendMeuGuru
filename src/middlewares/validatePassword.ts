import { NextFunction, Request, Response } from 'express';
import passwordSchema from '../schema/PasswordSchema';

async function validatePassword(req: Request, _res: Response, next: NextFunction) {
  try {
    await passwordSchema.validateAsync(req.body);

    return next();
  } catch (error) {
    next(error);
  }
}

export default validatePassword;