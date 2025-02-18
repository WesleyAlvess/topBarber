import mongoose from 'mongoose';

// Definição do Schema
const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome do Cliente é obrigatório'],
    },
    telefone: {
        type: String,
        validate: {
            validator: (telefone) => /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(telefone),
            message: 'Telefone inválido, formato esperado: (XX) XXXXX-XXXX',
        },
    },
    email: {
        type: String,
        required: [true, 'O email do Cliente é obrigatório'],
        unique: true,
        validate: {
            validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
            message: 'Email inválido',
        },
    },
    senha: {
        type: String,
        required: [true, 'A senha do Cliente é obrigatória'],
        minlength: 8,
    },
    foto: {
        type: String,
    },
    dataNascimento: {
        type: Date,
        required: [true, 'A data de nascimento do Cliente é obrigatório'],
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Feminino'],
    },
    status: {
        type: String,
        required: [true, 'O status do colaborador é obrigatório'],
        enum: ['Ativo', 'Inativo'],
        default: 'Ativo',
    },
    documento: {
        tipo: {
            type: String,
            enum: ['CPF', 'CNPJ'], 
            required: [true, 'O número do documento do colaborador é obrigatório'],
        }, 
        numero: {
            type: String,
            required: [true, 'O número do documento do colaborador é obrigatório'],
        },
    },
    endereco: {
        cidade: {
            type: String,
            required: [true, 'A cidade do endereço do colaborador é obrigatória'],
        },
        numero: {
            type: Number,
            required: [true, 'O número do endereço do colaborador é obrigatório'],
        },
        pais: {
            type: String,
            required: [true, 'O país do endereço do colaborador é obrigatório'],
        },
        cep: {
            type: {
                type: String,
                required: [true, 'O CEP do endereço do colaborador é obrigatório'],
            },
            validate: {
                validator: (cep) => /^\d{5}-\d{3}$/.test(cep),
                message: 'CEP inválido, formato esperado: XXXXX-XXX',
            },
        },
        uf: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

// Criando o Model
const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;
