import NavImg from '../assets/logo_nexo.png'
import UserImg from '../assets/User_foto.png'
import Carrinho from '../assets/Carrinho.png'
import Notificacao from '../assets/notificacao.png'
import PesquisaImg from '../assets/image 5.png'
import './navbar.css'

function Navbar() {
  return (
    <div className='nav-container'>
      <div className='navbar-container'>
        <img src={NavImg} alt="" />
        <form className='form-pesquisa'>
          <input type="text" placeholder='Pesquise' />
          <button><img src={PesquisaImg} alt='icon de pesquisa' /></button>
        </form>
        <div className='nav-icons'>
          <button><img src={Notificacao} alt="" /></button>
          <button><img src={Carrinho} alt="" /></button>
          <button><img src={UserImg} alt="" /></button>
        </div>
      </div>
      <div className='navbar-secundario'>

      </div>
    </div>
  )
}

export default Navbar