import userService from '../services/userService.js';

const createUser = async (req, res) => {
  console.log(req.body);

  const { name, email, telefone } = req.body;

  const { status, response } = await userService.createUser(name, email, telefone);

  res.status(status).json(response);
};

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();

  res.status(200).json(users);
};

export default {
  createUser,
  getUsers,
};
