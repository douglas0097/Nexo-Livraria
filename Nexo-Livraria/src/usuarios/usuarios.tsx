import { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import {FaUserCircle, FaBoxOpen, FaHeart, FaCog, FaSignOutAlt,} from 'react-icons/fa';
import './usuarios.css';
import { useNavigate } from 'react-router-dom';

type ActiveTab = 'pedidos' | 'configuracoes' | 'desejos'; 

// 1. Interface para tipar as informações do usuário salvas no localStorage
interface UserInfo {
    nome: string;
    email: string;
    token: string;
}

function Usuarios() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<ActiveTab>('configuracoes');
    // 2. Estado para armazenar as informações do usuário logado
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    // 3. Função de Logout
    const handleLogout = () => {
        // Remove o token e as informações do armazenamento local
        localStorage.removeItem('usuarioInfo'); 
        // Redireciona o usuário para a tela de login (rota raiz)
        navigate('/'); 
    };

    // 4. Efeito para carregar as informações do usuário ao montar o componente
    useEffect(() => {
        const storedUserInfo = localStorage.getItem('usuarioInfo');
        if (storedUserInfo) {
            try {
                // Tenta fazer o parse do JSON e salvar no estado
                setUserInfo(JSON.parse(storedUserInfo));
            } catch (error) {
                console.error("Erro ao fazer parse do userInfo:", error);
                // Se houver erro no parse (JSON inválido), limpa e desloga
                handleLogout();
            }
        } else {
            navigate('/');
        }
    }, [navigate]);

    if (!userInfo) {
        return <div>Carregando perfil...</div>; 
    }
        
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
                        <input type="text" id="username" defaultValue={userInfo.nome} /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" defaultValue={userInfo.email} /> 
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
                    
                    <aside className="profile-sidebar">
                        
                        <div className="user-info">
                            <FaUserCircle className="user-avatar" />
                            {/* 5. Exibir dados dinâmicos */}
                            <h3 className="user-name">{userInfo.nome}</h3> 
                            <p className="user-email">{userInfo.email}</p>
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

                        {/* 6. Botão de Logout com função */}
                        <button className="logout-button" onClick={handleLogout}> 
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