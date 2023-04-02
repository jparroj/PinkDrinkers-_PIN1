const prisma = require('../database');
const bcrypt = require('bcrypt');
const User = require('../model/User');



exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  
  if (!user) {
    return res.status(400).json({ error: 'Usuário não encontrado.' });
  }
  
  const passwordEqual = await bcrypt.compare(password, user.password);
  
  if (!passwordEqual) {
    return res.status(400).json({ error: 'Senha incorreta.' });
  }

  return res.json({ user });
};


exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.createUser(email, password);
    res.status(201).json(
      { message: 'Usuário criado com sucesso!', user });
  } catch (error) {
    console.error(error);
    res.status(500).json(
      { message: 'Erro ao criar usuário!' });
  }
};

