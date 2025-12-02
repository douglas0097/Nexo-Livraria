import { Schema, model, Document } from 'mongoose';

export interface ILivro extends Document {
  titulo: string;
  autor: string;
  isbn: string;
  anoPublicacao: number;
  genero: string;
  preco: number;
  estoque: number;
  imagemCapa?: string;
  criadoEm: Date;
}

const LivroSchema: Schema = new Schema({
  titulo: { 
    type: String, 
    required: [true, 'O título é obrigatório.'], 
    trim: true 
  },
  autor: { 
    type: String, 
    required: [true, 'O autor é obrigatório.'], 
    trim: true 
  },
  isbn: {
    type: String,
    required: [true, 'O ISBN é obrigatório.'],
    unique: true,
    trim: true
  },
  anoPublicacao: {
    type: Number,
    required: true,
    min: [1500, 'O ano de publicação parece muito antigo.']
  },
  genero: {
    type: String,
    trim: true
  },
  preco: {
    type: Number,
    required: [true, 'O preço é obrigatório.'],
    min: [0, 'O preço não pode ser negativo.'],
    set: (v: number) => parseFloat(v.toFixed(2))
  },
  estoque: {
    type: Number,
    required: true,
    default: 0,
    min: [0, 'O estoque não pode ser negativo.']
  },
  imagemCapa: {
    type: String,
    required: false, 
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

export const Livro = model<ILivro>('Livro', LivroSchema);