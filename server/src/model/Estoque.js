//J.PARRO <20/05/2023>
const { supabase } = require('../database');

exports.createEstoque = async (req, res) => {
    const { id_bebida, quantidade } = req.body;
    const { estoque, error } = await supabase.create({
        id_bebida,
        quantidade
    });
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json({ bebida });
};