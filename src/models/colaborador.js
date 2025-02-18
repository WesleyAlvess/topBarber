import mongoose from 'mongoose';

// Definição do Schema
const colaboradorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome do colaborador é obrigatório'],
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
        required: [true, 'O email do colaborador é obrigatório'],
        unique: true,
        validate: {
            validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
            message: 'Email inválido',
        },
    },
    senha: {
        type: String,
        required: [true, 'A senha do colaborador é obrigatória'],
        minlength: 8,
    },
    foto: {
        type: String,
    },
    dataNascimento: {
        type: Date,
        required: [true, 'A data de nascimento do colaborador é obrigatória'],
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
    contaBancaria: {
        titular: {
            type: String,
            required: [true, 'O titular da conta bancária do colaborador é obrigatório'],
        },
        cpfCnpj: {
            type: String,
            required: [true, 'O CPF do colaborador é obrigatório'],
            validate: {
                validator: (cpf) => /\d{3}\.\d{3}\.\d{3}-\d{2}/.test(cpf),
                message: 'CPF inválido',
            },
        },
        banco: {
            type: String,
            required: [true, 'O banco da conta bancária do colaborador é obrigatório'],
        },
        tipo: {
            type: String,
            enum: ['Conta Corrente', 'Conta Poupança'],
            required: [true, 'O tipo da conta bancária do colaborador é obrigatório'],
        },
        agencia: {
            type: String,
            required: [true, 'A agência da conta bancária do colaborador é obrigatória'],
        },
        numeroConta: {
            type: String,
            required: [true, 'O número da conta bancária do colaborador é obrigatório'],
        },
        digitoVerificador: {
            type: String,
            required: [true, 'O dígito verificador da conta bancária do colaborador é obrigatório'],
        }

    },
    recipientId: {
        type: String,
        required: [true, 'O ID do destinatário do email é obrigatório'],
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

// Criando o Model
const Colaborador = mongoose.model('Colaborador', colaboradorSchema);

export default Colaborador;
