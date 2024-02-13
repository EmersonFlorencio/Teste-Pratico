import express from 'express';
import userController from '../controller/userController.js';
import validateUser from '../middleware/validateUser.js';

const routers = express.Router();

routers.post('/usuarios', validateUser, userController.createUser);
routers.get('/usuarios', userController.getUsers);

export default routers;
