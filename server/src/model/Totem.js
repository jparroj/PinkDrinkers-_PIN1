//J.PARRO <20/05/2023>
const { supabase } = require('../database');

exports.createTotem = async (req, res) => {
  const { id_maquina, nome_totem } = req.body;
  const { totem, error } = await supabase.totem.create({
    id_maquina,
    nome_totem
  });
   // Verifica se ocorreu algum erro durante a criação do totem
  if (error) {
    // Em caso de erro, retorna uma resposta com status 400 e a mensagem de erro
    return res.status(400).json({ error: error.message });
  }
  // Se a criação do totem foi bem-sucedida, retorna uma resposta com a totem criado
  return res.json({ totem });
}