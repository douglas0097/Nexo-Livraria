import Navbar from '../navbar/navbar';
import {FaUserCircle,FaBoxOpen,FaHeart,FaCog,FaSignOutAlt,} from 'react-icons/fa';

import './usuarios.css';

function Usuarios() {
  return (
    <div>
      <Navbar />

      <div className="profile-page-container">
        <div className="profile-card">
          <aside className="profile-sidebar">
            <div className="user-info">
              <FaUserCircle className="user-avatar" />
              <h3 className="user-name">Usuário</h3>
              <p className="user-email">usuario@email.com</p>
            </div>

            <nav className="profile-nav">
              <button className="nav-item">
                <FaBoxOpen /> <span>Meus Pedidos</span>
              </button>
              <button className="nav-item">
                <FaHeart /> <span>Lista de Desejos</span>
              </button>
              <button className="nav-item active">
                <FaCog /> <span>Configurações</span>
              </button>
            </nav>

            <button className="logout-button">
              <FaSignOutAlt /> <span>Sair</span>
            </button>
          </aside>

          <div className="profile-content">
            <div className="content-panel">
              
              <h2>Configurações da Conta</h2>

              <form className="settings-form">
                <div className="form-group">
                  <label htmlFor="username">Nome de Usuário</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Novo usuário"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Seu email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Alterar Senha</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Nova Senha"
                  />
                </div>
                <button type="submit" className="save-button">
                  Salvar Alterações
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;