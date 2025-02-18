import mongoose from 'mongoose';

// Definição do Schema
const servicoSchema = new mongoose.Schema({
    salaoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Salao',
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    comissao: {
        type: Number, // % de comissão sobre o preço
        required: true,
    },
    duracao: {
        type: Number, // em minutos
        required: true,
    },
    recorrencia: {
        type: Number,
        required: true, // Periodo de recorrentidade do serviço (em dias)
    },
    descricao: {
        type: String,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        required: [true, 'O status do serviço é obrigatório'],
        enum: ['Ativo', 'Inativo', 'Exluido'],
        default: 'Ativo',
    },

});

// Criando o Model
const Servico = mongoose.model('Servico', servicoSchema);

export default Servico;
