import { Router } from 'express';
import UserController from '../controller/UserController';

const userRouter = Router();

userRouter.get('/all', UserController.getAll);

userRouter.get('/email', UserController.getByEmail);

export default userRouter;
