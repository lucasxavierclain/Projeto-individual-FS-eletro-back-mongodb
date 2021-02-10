const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Pedidos = new Schema({
    nome: {
        type: String,

    },
    email: {
        type: String,

    },
    telefone: {
        type: Number,

    },
    idproduto: {
        type: Number,

    },
    quantidade: {
        type: Number,

    }
})

mongoose.model('pedidos', Pedidos)