import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Usuario, IUsuario } from '../models/UsuarioModel';
import dotenv from 'dotenv';

dotenv.config();

// Extender o tipo Request do Express para incluir o usuário logado
// Isso é necessário para que o TypeScript reconheça req.usuario
declare global {
  namespace Express {
    interface Request {
      usuario?: IUsuario; // Adiciona a propriedade 'usuario' ao objeto Request
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token: string | undefined;

  // 1. Verificar se o token está no cabeçalho (Bearer Token)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Pega o token após "Bearer "
      token = req.headers.authorization.split(' ')[1];

      // 2. Decodificar o token
      const decoded = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as { id: string };

      // 3. Buscar o usuário pelo ID decodificado e anexá-lo ao objeto Request
      // Excluímos a senha (.select('-senha')) para segurança
      req.usuario = await Usuario.findById(decoded.id).select('-senha') as IUsuario;

      if (!req.usuario) {
        res.status(401);
        throw new Error('Usuário não encontrado. Token inválido.');
      }
      
      // 4. Se tudo estiver ok, passa para a próxima função (o Controller)
      next();
    } catch (error) {
      console.error('Erro de autenticação:', error);
      res.status(401).json({ message: 'Não autorizado, token falhou.' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Não autorizado, token não encontrado.' });
  }
};