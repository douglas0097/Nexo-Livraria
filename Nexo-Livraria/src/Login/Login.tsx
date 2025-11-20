import './Login.css';
import logoImage from '../assets/logo_nexo.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'; // Importar useState e React
import axios from 'axios'; // Importar Axios

const Login = () => {
    // 1. Gerenciamento de Estado para Formulário
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState(''); // Para exibir mensagens de erro da API
    const [loading, setLoading] = useState(false); // Para gerenciar o estado de carregamento

    const linkHome = useNavigate();

    // 2. Função de Envio (Substitui FormControl)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro('');
        setLoading(true);

        try {
            // Requisição POST para o backend
            // Usamos '/api/...' graças à configuração de proxy no vite.config.ts
            const { data } = await axios.post('/api/usuarios/login', { 
                email, 
                senha 
            });

            // 3. Sucesso: Salvar informações do usuário e token
            localStorage.setItem('usuarioInfo', JSON.stringify(data));
            
            // 4. Navegar para a página inicial
            alert(`Bem-vindo(a), ${data.nome}!`);
            linkHome('/home');

        } catch (error: any) {
            // 5. Tratamento de Erro da API (ex: Email ou Senha inválidos)
            const mensagem = error.response?.data?.message || 'Erro de conexão ou servidor.';
            setErro(mensagem);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="login-container">
            <div id="login-container-content">
                <img id="imagem-logo" src={logoImage} alt="Logo Nexo Livraria" />

                <div id="form-container">
                    <h1 className="login-title">Login</h1>

                    <form className="login-form" onSubmit={handleSubmit}>
                        {erro && <p style={{ color: 'red', textAlign: 'center' }}>{erro}</p>} 
                        {loading && <p style={{ textAlign: 'center' }}>Carregando...</p>}
                        
                        <span className='text-form'>Usuario | Email</span>
                        <input 
                            type="email" 
                            placeholder="exemplo@email.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Armazena o valor do input
                            required
                        />
                        <span className='text-form'>Senha</span>
                        <input 
                            type="password" 
                            placeholder="************" 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} // Armazena o valor do input
                            required
                        />
                        <a href="" className='text-link-recuperar'>Esqueceu a Senha?</a>
                        <span className='text-link-criar'>Não tem conta ainda? <a href="">Crie agora mesmo!</a></span>
                        
                        <button type="submit" disabled={loading}>
                            {loading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;