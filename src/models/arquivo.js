import mongoose from 'mongoose';

// Definição do Schema
const arquivoSchema = new mongoose.Schema({
  referenciaId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'model'
  },
  model: {
    type: String,
    required: true,
    enum: ['Servico', 'Salao']
  },
  caminho: {
    type: String,
    required: true,
  },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

// Criando o Model
const Arquivo = mongoose.model('Arquivo', arquivoSchema);

export default Arquivo;
