// Importa o módulo bcrypt para realizar o hash da senha
const bcrypt = require('bcrypt');
// Importa a instância do Prisma para realizar operações no banco de dados
const prisma = require('../database');

// Define um objeto que exporta funções para buscar e criar usuários no banco de dados
module.exports = {


  // Função assíncrona para criar um novo usuário no banco de dados
  async createUser(email, password) {
    try {
      // Cria um novo usuário no Supabase usando a função auth.signUp()
      const { user, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        // Lança uma exceção caso ocorra um erro ao criar o usuário
        throw new Error('Falha ao criar usuário: ' + error.message);
      }

      // Retorna o usuário criado
      return user;
    } catch (error) {
      // Lança uma exceção caso ocorra algum outro erro ao criar o usuário
      throw new Error('Falha ao criar usuário: ' + error.message);
    }
  },
};