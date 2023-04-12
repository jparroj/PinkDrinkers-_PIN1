const bcrypt = require('bcrypt');
const prisma = require('../database');

module.exports = {
  async getUserByEmail(email) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      throw new Error('Falha ao buscar o usuário por e-mail');
    }
  },

  async createUser(email, password) {
    try {
      const hPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          email,
          password: hPassword,
        },
      });
      return user;
    } catch (error) {
      throw new Error('Falha ao criar usuário');
    }
  },
};
