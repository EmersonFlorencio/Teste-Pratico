const validateUser = (req, res, next) => {
  const { name, email, telefone } = req.body;

  if (!name || !email || !telefone) {
    return res.status(400)
      .json({ message: 'Envie todos os campos para cadastro' });
  }

  if (name.length < 4) {
    return res.status(400)
      .json({ message: 'O campo Nome deve ter pelo menos 4 caracteres' });
  }
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400)
      .json({ message: 'O e-mail deve ser um e-mail válido' });
  }
  if (telefone.length < 12) {
    return res.status(400)
      .json({ message: 'O campo Telefone deve ter pelo menos 12 caracteres' });
  }
  next();
};

export default validateUser;

/*
  Middleware de validação das informações antes de cadastrar no banco de dados, caso 
  algun dado ou informação não atende os requisitos, ele bloqueia a requisição e informa
  o erro ao usúario.
*/
