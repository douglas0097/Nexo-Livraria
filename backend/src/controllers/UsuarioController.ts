import { Request, Response } from 'express';
import { Usuario } from '../models/UsuarioModel';
import { generateToken } from '../utils/generateToken';

export const UsuarioController = {

  // POST /api/usuarios/registrar
  async registrarUsuario(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    try {
      // 1. Verificar se o usuário já existe
      const usuarioExiste = await Usuario.findOne({ email });

      if (usuarioExiste) {
        return res.status(400).json({ message: 'Usuário com este email já registrado.' });
      }

      // 2. Criar novo usuário (a senha será criptografada pelo middleware do Model)
      const novoUsuario = await Usuario.create({ nome, email, senha });

      // 3. Responder com sucesso e o token JWT
      res.status(201).json(generateToken(novoUsuario));

    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      res.status(500).json({ message: 'Falha no servidor ao registrar usuário.' });
    }
  },

  // POST /api/usuarios/login
  async loginUsuario(req: Request, res: Response) {
    const { email, senha } = req.body;

    try {
      // 1. Buscar o usuário pelo email, incluindo o campo 'senha'
      // O '.select('+senha')' é necessário pois definimos 'select: false' no Model
      const usuario = await Usuario.findOne({ email }).select('+senha');

      // 2. Verificar se o usuário existe E se a senha confere
      if (usuario && (await usuario.matchPassword(senha))) {
        // 3. Login bem-sucedido: gerar e retornar o token
        res.json(generateToken(usuario));
      } else {
        // Falha na autenticação
        res.status(401).json({ message: 'Email ou senha inválidos.' });
      }
    } catch (error) {
      console.error('Erro no login:', error);
      res.status(500).json({ message: 'Falha no servidor durante o login.' });
    }
  },

  // GET /api/usuarios/perfil
async getProfile(req: Request, res: Response) {
    // req.usuario foi preenchido pelo middleware 'protect'
    const usuario = req.usuario; 

    if (usuario) {
        // Retorna APENAS os dados importantes (sem o hash da senha)
        res.json({
            _id: usuario._id,
            nome: usuario.nome,
            email: usuario.email,
            isAdmin: usuario.isAdmin,
            criadoEm: usuario.criadoEm,
        });
    } else {
        // Isso só deve ocorrer se houver um erro grave no middleware
        res.status(404).json({ message: 'Usuário não encontrado.' });
    }
},

};