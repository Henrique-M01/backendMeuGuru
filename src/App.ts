import express from 'express';
import userRouter from './router/UserRouter';

const app = express();

app.use(express.json());
app.use(userRouter);

export default app;
