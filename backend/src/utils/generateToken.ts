// backend/src/utils/generateToken.ts

import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUsuario } from '../models/UsuarioModel';

dotenv.config();

export interface AuthResponse {
  _id: string;
  nome: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export const generateToken = (usuario: IUsuario): AuthResponse => {
  const secret = process.env.JWT_SECRET as Secret;

  if (!secret) {
    throw new Error('JWT_SECRET não está definido nas variáveis de ambiente. Verifique o arquivo .env.');
  }

  // Opções tipadas corretamente
  const options: SignOptions = {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d' as any,
  };



  // Gerar o token
  const token = jwt.sign(
    { id: usuario._id, isAdmin: usuario.isAdmin },
    secret,
    options
  );

  return {
    _id: usuario._id.toString(),
    nome: usuario.nome,
    email: usuario.email,
    isAdmin: usuario.isAdmin,
    token,
  };
};
