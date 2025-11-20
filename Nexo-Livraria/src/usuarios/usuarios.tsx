import { useState } from 'react'; // <--- 1. Importar useState
import Navbar from '../navbar/navbar';
import {FaUserCircle, FaBoxOpen, FaHeart, FaCog, FaSignOutAlt,} from 'react-icons/fa';
import './usuarios.css';

type ActiveTab = 'pedidos' | 'configuracoes' | 'desejos'; 

function Usuarios() {
    const [activeTab, setActiveTab] = useState<ActiveTab>('configuracoes');
    
    const renderPedidosContent = () => (
        <div className="profile-content">
            <div className="content-panel">
                <h2>Meus Pedidos</h2>
                <p>Nenhum pedido registrado!</p>
                <div className="pedidos-lista">
                
                </div>
            </div>
        </div>
    );

    const renderDesejosContent = () => (
        <div className='profile-content'>
            <div className='content-panel'>
                <h2>Lista de Desejos</h2>

                <p>Nenhum produto na sua lista!</p>
            </div>
        </div>
    );

    const renderConfiguracoesContent = () => (
        <div className="profile-content">
            <div className="content-panel">
                <h2>Configurações da Conta</h2>
                
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
    
    const renderCurrentContent = () => {
        if (activeTab === 'pedidos') {
            return renderPedidosContent();
        } else if (activeTab === 'desejos') {
            return renderDesejosContent();
        }
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
                            
                            <button 
                                className={`nav-item ${activeTab === 'pedidos' ? 'active' : ''}`}
                                onClick={() => setActiveTab('pedidos')} 
                            >
                                <FaBoxOpen /> <span>Meus Pedidos</span>
                            </button>
                            
                            <button 
                                className={`nav-item ${activeTab === 'desejos' ? 'active' : ''}`}
                                onClick={() => setActiveTab('desejos')} 
                            >
                                <FaHeart /> <span>Lista de Desejos</span>
                            </button>
                            
                            <button 
                                className={`nav-item ${activeTab === 'configuracoes' ? 'active' : ''}`}
                                onClick={() => setActiveTab('configuracoes')} 
                            >
                                <FaCog /> <span>Configurações</span>
                            </button>
                        </nav>

                        <button className="logout-button">
                            <FaSignOutAlt /> <span>Sair</span>
                        </button>
                    </aside>

                    {renderCurrentContent()}
                </div>
            </div>
        </div>
    );
}

export default Usuarios;