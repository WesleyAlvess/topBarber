import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGO_URI

const conectarDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } );
        console.log('🔥 Conectado ao MongoDB Atlas com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao conectar ao MongoDB Atlas:', error);
        process.exit(1); // Finaliza a aplicação em caso de erro
    }
};

conectarDB()

export default conectarDB

