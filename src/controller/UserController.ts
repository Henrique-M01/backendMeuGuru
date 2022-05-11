import { NextFunction, Request, Response } from 'express';
import UsersService from '../service/UserService';

async function getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const allUsers = await UsersService.getAll();

    if (!allUsers) return res.status(404).json({ message: 'Users not found' });

    return res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  };
};

async function getByEmail(req: Request, res: Response, next: NextFunction) {
  try {
    const { email } = req.body;

    const user = await UsersService.getByEmail(email);

    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export default { getAll, getByEmail };
