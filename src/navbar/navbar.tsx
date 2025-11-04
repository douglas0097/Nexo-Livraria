import NavImg from '../assets/mini_logo_nexo.png'

import './navbar.css'
import { FaSearch, FaUser, FaShoppingCart, FaBell } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='nav-container'>

      <div className="navbar-lesft">
        <a href="/">
          <img src={NavImg} alt="Nexo" className='navbar-logo' />
        </a>
      </div>

      <div className="navbar-center">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Buscar por livros, autores ou gêneros..." />
        </div>
      </div>

      <div className="navbar-right">
        <button className="icon-button" aria-label="Notificações">
          <FaBell />
        </button>
        <button className="icon-button" aria-label="Carrinho">
          <FaShoppingCart />
        </button>
        <button className="icon-button" aria-label="Perfil de Usuário">
          <FaUser />
        </button>
      </div>
    </div>
  )
}

export default Navbar