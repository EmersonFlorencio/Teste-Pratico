import User from '../models/User.js';

const createUser = async (name, email, telefone) => {
  const userInfo = {
    name,
    email,
    telefone
  };

  const user = await User.create(userInfo);

  return user;
};

const getUsers = async () => {
  const users = User.find();

  return users;
};

export default {
  createUser,
  getUsers,
};