import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

const conectarDB = async () => {
    try {
        // Remover as opções obsoletas
        await mongoose.connect(uri);
        console.log('🔥 Conectado ao MongoDB Atlas com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao conectar ao MongoDB Atlas:', error);
        process.exit(1); // Finaliza a aplicação em caso de erro
    }
};

conectarDB();

export default conectarDB;
