import { NextFunction, Request, Response } from 'express';
import entrySchema from '../schema/EntrySchema';

async function validateEntry(req: Request, _res: Response, next: NextFunction) {
  try {
    await entrySchema.validateAsync(req.body);

    return next();
  } catch (error) {
    next(error);
  }
}

export default validateEntry;
