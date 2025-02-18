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
    status: {
        type: String,
        required: [true, 'O status do colaborador é obrigatório'],
        enum: ['Ativo', 'Inativo'],
        default: 'Ativo',
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

// Criando o Model
const SalaoCliente = mongoose.model('SalaoCliente', salaoClienteSchema);

export default SalaoCliente;
