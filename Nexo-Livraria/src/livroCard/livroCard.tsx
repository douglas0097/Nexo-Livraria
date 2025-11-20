import React from 'react';
import type { Livro } from '../livrosInterface/livrosInterface';
import './livroCard.css';

interface LivroCardProps {
    livro: Livro;
};

const LivroCard: React.FC<LivroCardProps> = ({ livro }) => {
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
                    
                    <button className="botao-adicionar">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LivroCard;