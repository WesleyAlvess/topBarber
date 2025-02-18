import mongoose from "mongoose";
import dotenv from 'dotenv'
const uri = process.env.MONGO_URI

dotenv.config()

const conectarDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        } );
        console.log('🔥 Conectado ao MongoDB Atlas com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao conectar ao MongoDB Atlas:', error);
        process.exit(1); // Finaliza a aplicação em caso de erro
    }
};

conectarDB()

export default conectarDB

