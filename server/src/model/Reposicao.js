//J.PARRO <20/05/2023>
const { supabase } = require('../database');

exports.createReposicao = async (req, res) => {
  const { status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao, id_totem } = req.body;
  const { reposicao, error } = await supabase.reposicao.create({
    status_reposicao,
    observacao_reposicao,
    id_itemestoque,
    data_reposicao,
    id_totem
  });
  // Verifica se ocorreu algum erro durante a criação da bebida
  if (error) {
    // Em caso de erro, retorna uma resposta com status 400 e a mensagem de erro
    return res.status(400).json({ error: error.message });
  }
  // Se a criação da reposicao foi bem-sucedida, retorna uma resposta com a bebida criada
  return res.json({ reposicao });
};