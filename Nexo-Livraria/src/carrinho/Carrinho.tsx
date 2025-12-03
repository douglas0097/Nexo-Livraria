import React from 'react';
import { useCarrinho } from '../context/CarrinhoContext';
import Navbar from '../navbar/navbar';
import './Carrinho.css';

const Carrinho: React.FC = () => {
    const { carrinho, decrementarItem, removerTudo, adicionarItem } = useCarrinho(); 
    
    const totalGeral = carrinho.reduce(
        (acc, item) => acc + item.preco * item.quantidade,
        0
    );

    return (
        <div>
            <Navbar />

            <div className="carrinho-page-container"> 
                
                <div className="carrinho-content-wrapper"> 
                    
                    <h2> Seu Carrinho de Compras</h2>

                    {carrinho.length === 0 ? (
                        <p className="carrinho-vazio">
                            Seu carrinho está vazio. Adicione alguns livros para começar!
                        </p>
                    ) : (
                        <>
                            <ul className="carrinho-lista">
                                {carrinho.map((item) => (
                                    <li key={item._id} className="carrinho-item">
                                        <div className="item-info">
                                            <span className="item-titulo">{item.titulo}</span>
                                            
                                            <div className="item-controls">
                                                <button 
                                                    className="botao-decrementa" 
                                                    onClick={() => decrementarItem(item._id)} 
                                                >
                                                    -
                                                </button>
                                                <span className="item-quantidade">{item.quantidade}</span>
                                                <button 
                                                    className="botao-incrementa" 
                                                    onClick={() => adicionarItem(item)} 
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="item-total">
                                            <span className="item-preco-total">
                                                R$ {(item.preco * item.quantidade).toFixed(2)}
                                            </span>
                                            
                                            <button 
                                                className="botao-remover-tudo" 
                                                onClick={() => removerTudo(item._id)} 
                                            >
                                                Remover Tudo
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="carrinho-resumo">
                                <h4>Total: R$ {totalGeral.toFixed(2)}</h4>
                                <button className="botao-checkout">Finalizar Compra</button>
                            </div>
                        </>
                    )}
                </div>
            </div> 
        </div>
    );
};

export default Carrinho;