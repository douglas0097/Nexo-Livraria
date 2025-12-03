import NavImg from '../assets/mini_logo_nexo.png'
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaBell } from 'react-icons/fa';

import './navbar.css'

function Navbar() {
  return (
    <div className='nav-container'>

      <div className="navbar-lesft">
        <a href="/home">
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

        <Link to="/carrinho">

          <button className="icon-button" aria-label="Carrinho">
            <FaShoppingCart />
          </button>
        </Link>

        <Link to="/usuarios">
          <button className="icon-button" aria-label="Perfil de Usuário">
            <FaUser />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar