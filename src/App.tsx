import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './login/Login'
import Home from './home/home'
import Livros from './livros/livros'
import Usuarios from './usuarios/usuarios'
import UsuariosDetalhes from './usuarios_detalhes/usuarios_detalhes'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>

        <Route path='/home' element={<Home/>}></Route>
        <Route path='/livros' element={<Livros/>}></Route>
        <Route path='/usuarios' element={<Usuarios/>}></Route>
        <Route path='/usuarios/detalhes' element={<UsuariosDetalhes/>}></Route>
        
        <Route path="*" element={<h1>404 - Página não encontrada</h1>}></Route>
      </Routes>
    </BrowserRouter>
)

}

export default App
