import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectToDatabase from './src/database/db.js';
import userRouter from './src/routers/userRouter.js';

const app = express();

connectToDatabase();
app.use(cors());
app.use(express.json());
app.use('/api', userRouter);

export default app;
