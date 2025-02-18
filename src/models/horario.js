import mongoose from 'mongoose';

// Definição do Schema
const horarioSchema = new mongoose.Schema({
    salaoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Salao',
        required: true,
    },
    especialidades: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Servico',
            required: true,
        }
    ],
    colaboradores: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Colaborador',
            required: true,
        }
    ],
    dias:{
        type: [Number],
        required: true,
    },
    inicio: {
        type: Date,
        required: true,
    },
    fim: {
        type: Date,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

// Criando o Model
const Horario = mongoose.model('Horario', horarioSchema);

export default Horario;
