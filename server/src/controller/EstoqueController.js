//J.PARRO <20/05/2023>
const { supabase } = require('../database');
const estoque = require('../model/Estoque');

// Controlador para criação do estoque
exports.createEstoque = async (req, res) => {
  const { id_bebida } = req.body;

  try {
    // Chama o método createEstoque do modelo para criar um estoque no Supabase
    const usar = await estoque.createEstoque(id_bebida);
    // Retorna uma resposta de sucesso com status 201 e mensagem
    res.status(201).json({
      message: 'Bebida incluída com sucesso!',
      usar
    });
  } catch (error) {
    // Em caso de erro, registra a mensagem do erro no console
    console.error(error);
    // Retorna uma resposta de erro com status 500 e mensagem
    res.status(500).json({
      message: 'Erro ao adicionar bebida!'
    });
  }
}; 