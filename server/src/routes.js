const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria uma instância do roteador do Express
const userController = require('./controller/UserController'); // Importa o controlador do usuário se for criar o controlador do usuário
const { user } = require('./database');
const User = require('./model/User');


// Rotas de usuário
router.get('/users', (req, res) =>{
    res.send(User.getUserByEmail);
  });


// Rota de autenticação
router.post('/login', userController.login);

//Rota de Criar Usuário- pagina de Cadastro
router.post('/users', userController.createUser);



module.exports = router;

