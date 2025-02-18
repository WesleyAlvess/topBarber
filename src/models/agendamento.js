import mongoose from 'mongoose';

// Definição do Schema
const salaoClienteSchema = new mongoose.Schema({
    salaoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Salao',
        required: true,
    },
    clienteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true,
    },
    servicoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servico',
        required: true,
    },
    colaboradorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        required: true,
    },
    dataAgendamento: {
        type: Date,
        required: true,
    },
    comissao: {
        type: Number,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
    transactionId: {
        type: String,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

// Criando o Model
const SalaoCliente = mongoose.model('SalaoCliente', salaoClienteSchema);

export default SalaoCliente;
