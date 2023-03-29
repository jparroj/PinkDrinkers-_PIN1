const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria uma instância do roteador do Express
//const userController = require('./controllers/userController'); // Importa o controlador do usuário se for criar o controlador do usuário

// Definição de rotas
// router.get('/users', userController.getUsers); // Define a rota para obter todos os usuários
// router.get('/users/:id', userController.getUserById); // Define a rota para obter um usuário específico pelo ID
// router.post('/users', userController.createUser); // Define a rota para criar um novo usuário
// router.put('/users/:id', userController.updateUser); // Define a rota para atualizar um usuário existente pelo ID
// router.delete('/users/:id', userController.deleteUser); // Define a rota para excluir um usuário existente pelo ID

router.get('/', (req, res) => {
    res.send('Bem-vindo ao meu servidor!');
  });

module.exports = router; // Exporta o roteador do Express para ser usado em outros arquivos
