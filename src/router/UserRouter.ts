import { Router } from 'express';
import validateEmail from '../middlewares/validateEmail';
import UserController from '../controller/UserController';
import validateName from '../middlewares/validateName';
// import validatePassword from '../middlewares/validatePassword';

const userRouter = Router();

userRouter.get('/all', UserController.getAll);

userRouter.get('/email', validateEmail, UserController.getByEmail);

userRouter.get('/name',validateName, UserController.getByName);

userRouter.delete('/:id', UserController.deleteUser);

userRouter.post('/create',
  UserController.createUser);

userRouter.put('/:id', UserController.updateUser);
export default userRouter;
