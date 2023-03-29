const express = require('express'); // Importa o framework Express
const bodyParser = require('body-parser'); // Importa o middleware Body Parser
const cors = require('cors'); // Importa o middleware CORS
const routes = require('./routes'); // Importa as rotas do servidor
require('dotenv').config();


const app = express(); // Cria uma instância do servidor Express

// Configuração de middleware
app.use(bodyParser.json()); // Adiciona o middleware Body Parser para lidar com as solicitações JSON
app.use(cors()); // Adiciona o middleware CORS para permitir o acesso a recursos de diferentes origens

// Configuração de rotas
app.use('/api', routes); // Define o prefixo "/api" para todas as rotas definidas no arquivo "routes.js"

app.use('/', routes);


// Inicialização do servidor
const port = process.env.PORT || 5000; // Define a porta do servidor, lendo a variável de ambiente "PORT" ou usando a porta 5000 por padrão
app.listen(port, () => { // Inicia o servidor na porta especificada
  console.log(`Servidor iniciado na porta ${port}`);
});
