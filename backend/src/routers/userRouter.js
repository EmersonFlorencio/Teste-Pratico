import express from 'express';
import userController from '../controller/userController.js';
import validateUser from '../middleware/validateUser.js';

const routers = express.Router();

routers.post('/usuarios', validateUser, userController.createUser);
routers.get('/usuarios', userController.getUsers);

export default routers;

/*
  Essas são as rotas da aplicação, a rota POST para a criação dos usúarios no banco de 
  dados e a rota GET para buscar a lista de usúarios cadastrados.
 */
