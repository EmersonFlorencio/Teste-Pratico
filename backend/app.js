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

/*
Foi escolhido o framework Express.js para a realização do server node pois ele é bastante 
facil e simples para o tipo de aplicação que nos realizamos nesse projeto.
So foi necessario a configuração do cors e do json para a cominicação ente o frontend e o 
backend e o do json para que ele consiga ler as informações enviadas atraves do body da 
requisição.
 */
