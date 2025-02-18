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
        unique: true,
        validate: {
            validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
            message: 'Email inválido',
        },
    },
    senha: {
        type: String,
        default: null,
        required: [true, 'A senha do salão é obrigatória'],
        minlength: 8,
    },
    telefone: {
        type: String,
        validate: {
            validator: (telefone) => /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(telefone),
            message: 'Telefone inválido, formato esperado: (XX) XXXXX-XXXX',
        },
    },
    endereco: {
        cidade: String,
        numero: Number,
        pais: String,
        cep: String,
        uf: String,
    },
    geo: {
        type: {
            type: String,
            enum: ['Point'], // Definindo o tipo como "Point" para dados geoespaciais
            default: 'Point',
        },
        coordinates: {
            type: [Number], // Espera um array de números (latitude e longitude)
            index: '2dsphere', // Define um índice geoespacial
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
