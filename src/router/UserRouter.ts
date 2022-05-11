import { Router } from 'express';
import UserController from '../controller/UserController';

const userRouter = Router();

userRouter.get('/users/all', UserController.getAll);

export default userRouter;
