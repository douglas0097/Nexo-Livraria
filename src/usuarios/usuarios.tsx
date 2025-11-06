import React, { useState } from 'react'; // <--- 1. Importar useState
import Navbar from '../navbar/navbar';
import {FaUserCircle, FaBoxOpen, FaHeart, FaCog, FaSignOutAlt,} from 'react-icons/fa';

import './usuarios.css';

// 2. Definindo o Tipo para o Estado (apenas 'pedidos' ou 'configuracoes' por enquanto)
type ActiveTab = 'pedidos' | 'configuracoes'; 

function Usuarios() {
    // 3. Estado: Inicia em 'configuracoes' para carregar a tela que você já tem
    const [activeTab, setActiveTab] = useState<ActiveTab>('configuracoes');
    
    // --- Funções de Conteúdo ---
    
    // 4. Conteúdo de Pedidos (Simulação)
    const renderPedidosContent = () => (
        <div className="profile-content">
            <div className="content-panel">
                <h2>📦 Meus Pedidos</h2>
                <p>Aqui você verá o conteúdo dos seus pedidos. Funcionando!</p>
                <div className="pedidos-lista">
                    <h4>Pedido #1004 - Em Aberto</h4>
                    <p>Total: R$ 250,00</p>
                </div>
            </div>
        </div>
    );

    // 5. Conteúdo de Configurações (SEU CÓDIGO ORIGINAL)
    const renderConfiguracoesContent = () => (
        <div className="profile-content">
            <div className="content-panel">
                <h2>Configurações da Conta</h2>
                
                {/* * O JSX DO SEU FORMULÁRIO DEVE SER COLOCADO AQUI DENTRO.
                  * (Eu estou usando o código que você enviou antes.)
                */}
                <form className="settings-form">
                    <div className="form-group">
                        <label htmlFor="username">Nome de Usuário</label>
                        <input type="text" id="username" placeholder="Novo usuário" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Seu email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Alterar Senha</label>
                        <input type="password" id="password" placeholder="Nova Senha" />
                    </div>
                    <button type="submit" className="save-button">
                        Salvar Alterações
                    </button>
                </form>
            </div>
        </div>
    );
    
    // 6. Decisão de Renderização (O "Interruptor")
    const renderCurrentContent = () => {
        if (activeTab === 'pedidos') {
            return renderPedidosContent();
        }
        // Se for qualquer outra coisa (Configurações ou Desejos), mostra Configurações
        return renderConfiguracoesContent();
    };

    return (
        <div>
            <Navbar />
            <div className="profile-page-container">
                <div className="profile-card">
                    
                    {/* PARTE ESQUERDA (SIDEBAR) */}
                    <aside className="profile-sidebar">
                        
                        {/* Informações do Usuário (topo) */}
                        <div className="user-info">
                            <FaUserCircle className="user-avatar" />
                            <h3 className="user-name">Usuário</h3>
                            <p className="user-email">usuario@email.com</p>
                        </div>

                        <nav className="profile-nav">
                            
                            {/* BOTÃO MEUS PEDIDOS */}
                            <button 
                                // Se activeTab for 'pedidos', adiciona a classe 'active'
                                className={`nav-item ${activeTab === 'pedidos' ? 'active' : ''}`}
                                // Ao clicar, muda o estado para 'pedidos'
                                onClick={() => setActiveTab('pedidos')} 
                            >
                                <FaBoxOpen /> <span>Meus Pedidos</span>
                            </button>
                            
                            {/* BOTÃO LISTA DE DESEJOS (Ainda aponta para Configurações) */}
                            <button 
                                className={`nav-item ${activeTab === 'desejos' ? 'active' : ''}`}
                               
                            >
                                <FaHeart /> <span>Lista de Desejos</span>
                            </button>
                            
                            {/* BOTÃO CONFIGURAÇÕES */}
                            <button 
                                // Se activeTab for 'configuracoes', adiciona a classe 'active'
                                className={`nav-item ${activeTab === 'configuracoes' ? 'active' : ''}`}
                                // Ao clicar, muda o estado para 'configuracoes'
                                onClick={() => setActiveTab('configuracoes')} 
                            >
                                <FaCog /> <span>Configurações</span>
                            </button>
                        </nav>

                        {/* Botão Sair */}
                        <button className="logout-button">
                            <FaSignOutAlt /> <span>Sair</span>
                        </button>
                    </aside>

                    {/* PARTE DIREITA: CHAMA A FUNÇÃO QUE DECIDE O QUE MOSTRAR */}
                    {renderCurrentContent()}
                </div>
            </div>
        </div>
    );
}

export default Usuarios;