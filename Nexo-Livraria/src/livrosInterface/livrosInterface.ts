export interface Genero {
  id: number;
  nome: string;
}

export interface Livro {
  _id: string;
  titulo: string;
  autor: string;
  imagemCapa: string;
  preco: number;
  generos: Genero[]; 
}

export interface FiltroEstado {
  termoPesquisa: string;
  generosAtivos: string[];
}

export const LIVROS_SIMULADOS: Livro[] = [
    { _id: '1', titulo: 'O Selo dos Anciãos', autor: 'Elara Vex', imagemCapa: 'URL_CAPA_1', preco: 49.90, generos: [{ id: 1, nome: 'Mistério' }] },
    { _id: '2', titulo: 'Runas na Escuridão', autor: 'Kaelen Roric', imagemCapa: 'URL_CAPA_2', preco: 65.00, generos: [{ id: 2, nome: 'Magia' }] },
    { _id: '3', titulo: 'O Feitiço Proibido', autor: 'Lysandra Thorne', imagemCapa: 'URL_CAPA_3', preco: 35.50, generos: [{ id: 1, nome: 'Mistério' }, { id: 3, nome: 'Aventura' }] },
    { _id: '4', titulo: 'A Crônica das Raízes', autor: 'Elara Vex', imagemCapa: 'URL_CAPA_4', preco: 59.90, generos: [{ id: 3, nome: 'Aventura' }] },
    { _id: '5', titulo: 'O Selo dos Anciãos', autor: 'Elara Vex', imagemCapa: 'URL_CAPA_1', preco: 49.90, generos: [{ id: 1, nome: 'Mistério' }] },
    { _id: '6', titulo: 'Runas na Escuridão', autor: 'Kaelen Roric', imagemCapa: 'URL_CAPA_2', preco: 65.00, generos: [{ id: 2, nome: 'Magia' }] },
    { _id: '7', titulo: 'O Feitiço Proibido', autor: 'Lysandra Thorne', imagemCapa: 'URL_CAPA_3', preco: 35.50, generos: [{ id: 1, nome: 'Mistério' }, { id: 3, nome: 'Aventura' }] },
    { _id: '8', titulo: 'A Crônica das Raízes', autor: 'Elara Vex', imagemCapa: 'URL_CAPA_4', preco: 59.90, generos: [{ id: 3, nome: 'Aventura' }] },
    { _id: '9', titulo: 'O Selo dos Anciãos', autor: 'Elara Vex', imagemCapa: 'URL_CAPA_1', preco: 49.90, generos: [{ id: 1, nome: 'Mistério' }] },
    { _id: '10', titulo: 'Runas na Escuridão', autor: 'Kaelen Roric', imagemCapa: 'URL_CAPA_2', preco: 65.00, generos: [{ id: 2, nome: 'Magia' }] },
    { _id: '11', titulo: 'O Feitiço Proibido', autor: 'Lysandra Thorne', imagemCapa: 'URL_CAPA_3', preco: 35.50, generos: [{ id: 1, nome: 'Mistério' }, { id: 3, nome: 'Aventura' }] },
    { _id: '', titulo: 'A Crônica das Raízes', autor: 'Elara Vex', imagemCapa: 'URL_CAPA_4', preco: 59.90, generos: [{ id: 3, nome: 'Aventura' }] },
];

export const TODOS_OS_GENEROS = ['Mistério', 'Aventura', 'Magia', 'Horror', 'Ficção Científica'];