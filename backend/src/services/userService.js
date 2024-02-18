import User from '../models/User.js';

const createUser = async (name, email, telefone) => {
  const userInfo = {
    name,
    email,
    telefone
  };

  const user = await User.create(userInfo);

  return { status: 201, response: user };
};

const getUsers = async () => {
  const users = User.find();

  return users;
};

export default {
  createUser,
  getUsers,
};

/*
  Aqui foi realizada duas funções, a create para inserir os dados que vem do front-end
  no banco de dados e a função de getUsers para recuperar a listagem dos usuarios que 
  ja estão cadastrados no banco de dados.
*/