import { Request, Response } from 'express';
import { Livro } from '../models/LivroModel';

export const LivroController = {
  
  // POST /api/livros
  // Cria um novo livro no catálogo (Requer JWT)
  async criarLivro(req: Request, res: Response) {
    
    try {
      const livro = await Livro.create(req.body);
      // Resposta de sucesso na criação
      res.status(201).json(livro); 
    } catch (error: any) {
      // Tratamento de erro específico para ISBN duplicado
      if (error.code === 11000) { 
        return res.status(400).json({ message: 'Um livro com este ISBN já existe.' });
      }
      // Outros erros de validação do Mongoose ou do servidor
      res.status(400).json({ message: 'Erro ao criar livro.', details: error.message });
    }
  },

  // GET /api/livros
  // Lista todos os livros (Público)
  async listarLivros(req: Request, res: Response) {
    try {
      // Busca todos os livros no banco de dados
      const livros = await Livro.find({}); 
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar livros.' });
    }
  },

  // GET /api/livros/:id
  // Busca um livro específico pelo ID (Público)
  async buscarLivroPorId(req: Request, res: Response) {
    try {
      const livro = await Livro.findById(req.params.id);
      
      if (!livro) {
        return res.status(404).json({ message: 'Livro não encontrado.' });
      }
      
      res.status(200).json(livro);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar livro.' });
    }
  },

  // PUT /api/livros/:id
  // Atualiza um livro existente
  async atualizarLivro(req: Request, res: Response) {
    try {
      const livroAtualizado = await Livro.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true } 
      );

      if (!livroAtualizado) {
        return res.status(404).json({ message: 'Livro não encontrado.' });
      }

      res.status(200).json(livroAtualizado);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar livro.' });
    }
  },

  // DELETE /api/livros/:id
  // Deleta um livro (Requer JWT)
  async deletarLivro(req: Request, res: Response) {
    try {
      const livroDeletado = await Livro.findByIdAndDelete(req.params.id);
      
      if (!livroDeletado) {
        return res.status(404).json({ message: 'Livro não encontrado.' });
      }

      // 204 No Content indica sucesso na deleção sem corpo de resposta
      res.status(204).send(); 
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar livro.' });
    }
  },
};