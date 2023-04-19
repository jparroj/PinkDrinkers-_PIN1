const { PrismaClient } = require('@prisma/client');
require('dotenv').config({ path: '../.env' });
console.log(process.env.DATABASE_URL);
console.log('DATABASE_HOST:', process.env.DATABASE_HOST);

const prisma = new PrismaClient({
  // Configuração de conexão com o banco de dados
  datasources: {
    db: {
      //url: process.env.DATABASE_URL, // Lê a variável de ambiente "DATABASE_URL" que contém a URL de conexão com o banco de dados
      url: `${process.env.DATABASE_HOST}/pin1` // Lê a variável de ambiente "DATABASE_HOST" que contém o endereço IP do container do banco de dados ou usa o valor padrão
    },
  },
});


module.exports = prisma; // Exporta o objeto Prisma Client para ser usado em outros arquivos
