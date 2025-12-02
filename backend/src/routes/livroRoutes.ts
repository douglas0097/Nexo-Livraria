import { Router } from 'express';
import { LivroController } from '../controllers/livroController';
import { protect } from '../middleware/authMiddleware'; // Importa o middleware de proteção

const router = Router();

// Rota base: /api/livros
router.route('/')
  // GET: /api/livros -> Listar todos os livros (Rota pública, para a HomePage)
  .get(LivroController.listarLivros)
  
  // POST: /api/livros -> Criar um novo livro (Requer autenticação)
  .post(protect, LivroController.criarLivro); 

// Rotas específicas por ID: /api/livros/:id
router.route('/:id')
  // GET: /api/livros/:id -> Buscar um livro específico (Rota pública)
  .get(LivroController.buscarLivroPorId)
  
  // PUT: /api/livros/:id -> Atualizar um livro (Requer autenticação)
  .put(protect, LivroController.atualizarLivro)
  
  // DELETE: /api/livros/:id -> Deletar um livro (Requer autenticação)
  .delete(protect, LivroController.deletarLivro);

export default router;