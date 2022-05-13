import { Router } from 'express';
import UserController from '../controller/UserController';
// import validatePassword from '../middlewares/validatePassword';

const userRouter = Router();

userRouter.get('/all', UserController.getAll);

userRouter.delete('/:id', UserController.deleteUser);

userRouter.post('/create',
  UserController.createUser);

userRouter.put('/:id', UserController.updateUser);
export default userRouter;
