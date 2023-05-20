//J.PARRO <20/05/2023>
const { supabase } = require('../database');
const totem = require('../model/Totem');

exports.createTotem = async (req, res) => {
  // Extrair os valores id_maquina e nome_totem do corpo do Totem
  const { id_maquina, nome_totem } = req.body;
  try {
    // Chamar a função createTotem do modelo Totem para criar o totem
    const user = await totem.createTotem(id_maquina, nome_totem);
    // Retornar uma resposta com status 201 (Created) e uma mensagem de sucesso,
    res.status(201).json({
      message: 'Totem criado com sucesso!', user
    });
  } catch (error) {
    console.error(error);
    // Se ocorrer um erro durante o processo
    // uma resposta com status 500 (Internal Server Error) e a mensagem de erro
    return res.status(500).json({ error: error.message });
  }
};