import { Router } from 'express';
import validateEmail from '../middlewares/validateEmail';
import UserController from '../controller/UserController';
import validateName from '../middlewares/validateName';

const userRouter = Router();

userRouter.get('/all', UserController.getAll);

userRouter.get('/email', validateEmail, UserController.getByEmail);

userRouter.get('/name',validateName, UserController.getByName);

export default userRouter;
