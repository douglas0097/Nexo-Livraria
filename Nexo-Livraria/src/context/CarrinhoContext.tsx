import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Livro } from '../livrosInterface/livrosInterface';

const CARRINHO_STORAGE_KEY = 'nexoLivrariaCarrinho';

// 1. Interface para o item do carrinho
interface CarrinhoItem extends Livro {
  _id: string;
  quantidade: number;
}

// 2. Interface para o contexto
interface CarrinhoContextType {
  carrinho: CarrinhoItem[];
  adicionarItem: (livro: Livro) => void;
  decrementarItem: (livroId: string) => void;
  removerTudo: (livroId: string) => void;
  limparCarrinho: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  // Carregar carrinho do localStorage
  const [carrinho, setCarrinho] = useState<CarrinhoItem[]>(() => {
    try {
      const storageValue = localStorage.getItem(CARRINHO_STORAGE_KEY);
      return storageValue ? JSON.parse(storageValue) : [];
    } catch (error) {
      console.error("Erro ao carregar o carrinho do localStorage:", error);
      return [];
    }
  });

  const limparCarrinho = () => {
    setCarrinho([]);
    localStorage.removeItem(CARRINHO_STORAGE_KEY); 
  };

  useEffect(() => {
    try {
      localStorage.setItem(CARRINHO_STORAGE_KEY, JSON.stringify(carrinho));
    } catch (error) {
      console.error("Erro ao salvar o carrinho no localStorage:", error);
    }
  }, [carrinho]);

  // Adicionar item ao carrinho
  const adicionarItem = (livro: Livro) => {
    setCarrinho(prevCarrinho => {
      const itemExistente = prevCarrinho.find(item => item._id === livro._id);

      if (itemExistente) {
        return prevCarrinho.map(item =>
          item._id === livro._id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCarrinho, { ...livro, quantidade: 1 }];
      }
    });
  };

  // Diminuir quantidade
  const decrementarItem = (livroId: string) => {
    setCarrinho(prevCarrinho => {
      return prevCarrinho.reduce((acc, item) => {
        if (item._id === livroId) {
          if (item.quantidade > 1) {
            acc.push({ ...item, quantidade: item.quantidade - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as CarrinhoItem[]);
    });
  };

  // Remover item completamente
  const removerTudo = (livroId: string) => {
    setCarrinho(prevCarrinho =>
      prevCarrinho.filter(item => item._id !== livroId)
    );
  };

  return (
    <CarrinhoContext.Provider value={{
      carrinho,
      adicionarItem,
      decrementarItem,
      removerTudo,
      limparCarrinho
    }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
};
