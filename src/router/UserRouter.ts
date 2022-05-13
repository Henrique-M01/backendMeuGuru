import { Router } from 'express';
import UserController from '../controller/UserController';
import validateEntry from '../middlewares/EntryValidate';


const userRouter = Router();

userRouter.get('/all', UserController.getAll);

userRouter.delete('/:id', UserController.deleteUser);

userRouter.post('/create',
  validateEntry, UserController.createUser);

userRouter.put('/:id', 
  validateEntry, UserController.updateUser);

export default userRouter;
