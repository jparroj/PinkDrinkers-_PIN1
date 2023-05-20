//J.PARRO <20/05/2023>
const { supabase } = require('../database');
const reposicao = require('../model/Reposicao');

exports.createReposicao = async (req, res) => {
    // Extrair os valores do corpo da Requisicao
    const { status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao, id_totem } = req.body;
    try {
        // Chama o método createReposico do modelo para criar uma reposicao no Supabase
        const user = await reposicao.createReposicao(status_reposicao, id_itemestoque, data_reposicao, id_totem);
        // Retornar uma resposta com status 201 (Created) e uma mensagem de sucesso,
        res.status(201).json({
            message: 'Reposição realizada com sucesso!',
        });
    } catch (error) {
        console.error(error);
        // Se ocorrer um erro durante o processo
        // uma resposta com status 500 (Internal Server Error) e a mensagem de erro
        res.status(500).json({ error: error.message });
    }
};