import mongoose from 'mongoose';

// Definição do Schema
const salaoColaboradorSchema = new mongoose.Schema({
    salaoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Salao',
        required: true,
    },
    colaboradorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
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
const SalaoColaborador = mongoose.model('SalaoColaborador', salaoColaboradorSchema);

export default SalaoColaborador;
