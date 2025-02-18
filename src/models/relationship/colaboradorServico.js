import mongoose from 'mongoose';

// Definição do Schema
const colaboradorServicoSchema = new mongoose.Schema({
    colaboradorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        required: true,
    },
    servicoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servico',
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
const ColaboradorServico = mongoose.model('ColaboradorServico', colaboradorServicoSchema);

export default ColaboradorServico;
