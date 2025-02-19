import mongoose from 'mongoose';

// Definição do Schema
const salaoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome do salão é obrigatório'],
    },
    foto: String,
    capa: String,
    email: {
        type: String,
        required: [true, 'O email do salão é obrigatório'],
    },
    senha: {
        type: String,
    },
    telefone: {
        type: String,
    },
    endereco: {
        cidade: {
            type: String,
            required: [true, 'A cidade do salão é obrigatória'],
        },
        numero: {
            type: Number,
            required: [true, 'O número do endereço do salão é obrigatório'],
        },
        pais: {
            type: String,
            required: [true, 'O país do salão é obrigatório'],
        },
        cep: {
            type: String,
        },
        uf: String,
    },
    geo: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
        },
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

// Criando o Model
const Salao = mongoose.model('Salao', salaoSchema);

export default Salao;
