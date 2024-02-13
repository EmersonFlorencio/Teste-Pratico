const validateUser = (req, res, next) => {
  const { name, email, telefone } = req.body;

  if (!name || !email || !telefone) {
    return res.status(400)
      .json({ message: 'Submit all fields for registration' });
  }

  if (name.length < 4) {
    return res.status(400)
      .json({ message: 'Name length must be at least 4 characters long' });
  }
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400)
      .json({ message: 'Email must be a valid email' });
  }
  if (telefone.length < 10) {
    return res.status(400)
      .json({ message: 'Telefone length must be at least 10 characters long' });
  }
  next();
};

export default validateUser;
