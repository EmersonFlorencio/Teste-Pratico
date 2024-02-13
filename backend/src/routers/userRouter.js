import express from 'express';
import userController from '../controller/userController.js';

const routers = express.Router();

routers.post('/usuarios', userController.createUser);
routers.get('/usuarios', userController.getUsers);

export default routers;
