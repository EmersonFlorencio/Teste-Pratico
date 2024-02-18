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

/*
  Ja no controller tem também há duas funções a de createUser que recebe o a requisição do
  front-end e extrai as informações para repassar para o serviço de cadastramento no banco 
  de dados.
  E a função de GetUser que repassa as informações da lista dos usuarios que foram 
  requisitadas e repassa para o front, assim sabendo que todos os dados estão corretos.
*/
