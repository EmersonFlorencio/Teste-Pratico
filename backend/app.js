import 'dotenv/config';
import express from 'express';
import connectToDatabase from './src/database/db.js';
import userRouter from './src/routers/userRouter.js';

const app = express();

connectToDatabase();
app.use(express.json());
app.use('/api', userRouter);

export default app;
