import userService from '../services/userService.js';

const createUser = async (req, res) => {
  console.log(req.body);

  const { name, email, telefone } = req.body;


  const user = await userService.createUser(name, email, telefone);

  res.status(201).json(user);
};

const getUsers = async (_req, res) => {

  const users = await userService.getUsers();

  console.log('Controller User', users);

  res.status(200).json(users);
};

export default {
  createUser,
  getUsers,
};
