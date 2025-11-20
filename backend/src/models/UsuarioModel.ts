import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

// 1. Interface TypeScript para tipagem forte
export interface IUsuario extends Document {
  nome: string;
  email: string;
  senha: string; // Armazenada como hash
  isAdmin: boolean;
  criadoEm: Date;
  matchPassword(enteredPassword: string): Promise<boolean>;
}

// 2. Schema Mongoose
const UsuarioSchema: Schema = new Schema({
  nome: {
    type: String,
    required: [true, 'O nome é obrigatório.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'O email é obrigatório.'],
    unique: true, // Garante que não haverá emails duplicados
    trim: true,
    lowercase: true,
  },
  senha: {
    type: String,
    required: [true, 'A senha é obrigatória.'],
    select: false, // IMPORTANTE: Impede que a senha seja retornada em consultas padrão
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

// 3. MIDDLEWARE: Criptografar a senha antes de salvar
// Isso é um pré-gancho (pre-hook) do Mongoose
UsuarioSchema.pre<IUsuario>('save', async function (next) {
  // Apenas criptografa se a senha foi modificada ou é nova
  if (!this.isModified('senha')) {
    return next();
  }
  // Gera o salt e criptografa
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

// 4. Método para comparar a senha (usado no login)
UsuarioSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
  // Compara a senha informada com o hash salvo no banco
  return await bcrypt.compare(enteredPassword, this.senha);
};

// 5. Exporta o Model
export const Usuario = model<IUsuario>('Usuario', UsuarioSchema);