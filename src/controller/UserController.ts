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

async function deleteUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const deleted = await UsersService.deleteUser(Number(id));

    if (!deleted) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    next(error);
  }
}

async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body;

    const created = await UsersService.createUser(name, email, password);

    if (!created) return res.status(400).json({ message: 'User already exists' });

    return res.status(201).json(created);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body;
    const { id } = req.params;

    const updated = await UsersService.updateUser(Number(id), name, email, password);

    if (!updated) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
}

export default {
  getAll,
  deleteUser,
  createUser,
  updateUser,
};
