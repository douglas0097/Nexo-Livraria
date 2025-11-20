import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carrega as variáveis do .env
dotenv.config();

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error('ERRO: Variável MONGO_URI não está definida no arquivo .env.');
    process.exit(1);
  }

  try {
    // Conecta ao MongoDB
    await mongoose.connect(uri);
    console.log('🔗 MongoDB Conectado com Sucesso!');
  } catch (error) {
    // Caso a conexão falhe, o processo é encerrado
    console.error(`❌ Erro ao conectar ao MongoDB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;