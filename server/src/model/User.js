// Importa o módulo bcrypt para realizar o hash da senha
const bcrypt = require('bcrypt');
// Importa a instância do Prisma para realizar operações no banco de dados
const prisma = require('../database');

// Define um objeto que exporta funções para buscar e criar usuários no banco de dados
module.exports = {

  // Função assíncrona para buscar um usuário no banco de dados a partir do e-mail
  async getUserByEmail(email) {
    try {
      // Busca o usuário no banco de dados usando o Prisma
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      // Retorna o usuário encontrado
      return user;
    } catch (error) {
      // Lança uma exceção caso ocorra algum erro ao buscar o usuário
      throw new Error('Falha ao buscar o usuário por e-mail');
    }
  },

  // Função assíncrona para criar um novo usuário no banco de dados
  async createUser(email, password) {
    try {
      // Realiza o hash da senha usando o bcrypt
      const hPassword = await bcrypt.hash(password, 10);
      // Cria o novo usuário no banco de dados usando o Prisma
      const user = await prisma.user.create({
        data: {
          email,
          password: hPassword,
        },
      });
      // Retorna o usuário criado
      return user;
    } catch (error) {
      // Lança uma exceção caso ocorra algum erro ao criar o usuário
      throw new Error('Falha ao criar usuário');
    }
  },
};