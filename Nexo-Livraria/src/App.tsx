import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarrinhoProvider } from './context/CarrinhoContext'; 

import './App.css';
import Login from './Login/Login';
import Registro from './registro/registro';

import Home from './home/home';
import Livros from './livros/livros';
import Usuarios from './usuarios/usuarios';
import UsuariosDetalhes from './usuarios_detalhes/usuarios_detalhes';
import Carrinho from './carrinho/Carrinho'; 
function App() {

  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/home' element={<Home />} />
          <Route path='/livros' element={<Livros />} />
          <Route path='/usuarios' element={<Usuarios />} />
          <Route path='/usuarios/detalhes' element={<UsuariosDetalhes />} />
          <Route path='/carrinho' element={<Carrinho />}></Route>
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </CarrinhoProvider>
  );
}

export default App;