import express from 'express';
import cors from 'cors';
import errorMiddleware from './middlewares/errorMiddleware';
import userRouter from './router/UserRouter';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/users',userRouter);
app.use(errorMiddleware)

export default app;
