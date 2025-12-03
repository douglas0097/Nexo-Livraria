import React from 'react';
import type { Livro } from '../livrosInterface/livrosInterface';
import { useCarrinho } from '../context/CarrinhoContext'; 
import './livroCard.css';

interface LivroCardProps {
    livro: Livro;
};

const LivroCard: React.FC<LivroCardProps> = ({ livro }) => {
    const { adicionarItem } = useCarrinho();

    const handleAdicionar = () => {
        adicionarItem(livro);
        alert(`"${livro.titulo}" adicionado ao carrinho!`);
    };

    return (
        <div className="livrocard-container">
            
            <div className="livro-capa">
                <img src={livro.imagemCapa} alt={`Capa de ${livro.titulo}`} className="livro-img-capa" />
            </div>

            <div className="livro-info">
                <h5 className="livro-titulo">{livro.titulo}</h5>
                <p className="livro-autor">Por: {livro.autor}</p>
                
                <div className="livro-footer">
                    <span className="livro-preco">
                        R$ {livro.preco.toFixed(2)}
                    </span>
                    
                    <button className="botao-adicionar" onClick={handleAdicionar}>
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LivroCard;