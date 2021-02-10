const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json())
require('./src/models/Pedidos')
require('./src/db/connect')
const cors = require('cors');

app.use(cors());
const Pedidos = mongoose.model('pedidos')

app.get('/Formulario', cors(), async (req, res) => {
    const pedidosResponse = await Pedidos.find()
    const pedidosJSON = await pedidosResponse;
    return res.json(pedidosResponse)
})

app.post('/Formulario', async (req, res) => {


    const novoPedidos = new Pedidos({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        idproduto: req.body.idproduto,
        quantidade: req.body.quantidade
    })

    novoPedidos.save()
    return res.json({ menssage: 'Pedido concluido com sucesso', pedido: novoPedidos })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log(`Servidor ativo na porta ${PORT}`)
})