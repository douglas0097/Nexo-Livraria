import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import usuarioRoutes from './routes/UsuarioRoutes';
// import bookRoutes from './routes/bookRoutes'; // Exemplo: rotas de livros

// Carrega as variáveis de ambiente
dotenv.config();

// Conecta ao banco de dados
connectDB();

const app = express();
const PORT = process.env.PORT || 5000; // Usa a porta 3000 do .env ou 5000 como fallback

// MIDDLEWARES GLOBAIS
// Permite que o servidor processe dados JSON
app.use(express.json());
// Habilita o CORS (permite requisições do seu frontend Nexo-Livraria)
app.use(cors());

// ROTAS DE TESTE / SAÚDE
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('API da Nexo Livraria rodando com sucesso!');
});

// ROTAS ESPECÍFICAS
// Exemplo de como importar as rotas (descomente quando criá-las)
// app.use('/api/books', bookRoutes);
app.use('/api/usuarios', usuarioRoutes); // <--- USO DA NOVA ROTA

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Express rodando na porta http://localhost:${PORT}`);
});