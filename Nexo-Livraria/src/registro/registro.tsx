import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import logoImage from '../assets/logo_nexo.png';
import './Registro.css'; 

const Registro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');

    // 1. Validação simples no Front-end (Confirmação de Senha)
    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    setLoading(true);

    try {
      // 2. Chamada para o endpoint de Registro
      const { data } = await axios.post('/api/usuarios/registrar', {
        nome,
        email,
        senha,
      });

      // 3. Sucesso: Salvar informações do usuário e token
      localStorage.setItem('usuarioInfo', JSON.stringify(data));
      
      // 4. Redirecionar para a Home ou Dashboard
      alert(`Conta criada com sucesso! Bem-vindo(a), ${data.nome}.`);
      navigate('/home'); 

    } catch (error: any) {
      // 5. Tratamento de Erro da API (ex: Email já registrado)
      const errorMessage = error.response?.data?.message || 'Erro de conexão ou servidor. Tente novamente.';
      setErro(errorMessage);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="registro-container">
      <div id="registro-container-content">
        <img id="imagem-logo" src={logoImage} alt="Logo Nexo Livraria" />

        <div id="form-registro-container">
          <h1 className="registro-title">Crie sua Conta</h1>

          <form className="registro-form" onSubmit={handleSubmit}>
            {erro && <p style={{ color: 'red', textAlign: 'center' }}>{erro}</p>}
            
            <span className='text-form'>Nome Completo</span>
            <input 
                type="text" 
                placeholder="Seu Nome" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            
            <span className='text-form'>Email</span>
            <input 
                type="email" 
                placeholder="exemplo@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            
            <span className='text-form'>Senha</span>
            <input 
                type="password" 
                placeholder="************" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
            />
            
            <span className='text-form'>Confirme a Senha</span>
            <input 
                type="password" 
                placeholder="************" 
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
            />

            <span className='text-link-login'>Já tem conta? <Link to="/">Entre agora!</Link></span>
            
            <button type="submit" disabled={loading}>
                {loading ? 'Criando...' : 'Registrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;