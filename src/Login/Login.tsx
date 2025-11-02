import './Login.css'
import logoImage from '../assets/logo_nexo.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const FormControl = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form enviado!");
      };

    const linkHome = useNavigate();
    function ClickNavigate() {
        linkHome('/home')
    }

    return (
        <div id="login-container">
            <div id="login-container-content">
                <img id="imagem-logo" src={logoImage} alt="Descrição da imagem" />

                <div id="form-container">
                    <h1 className="login-title">Login</h1>

                    <form className="login-form" onSubmit={FormControl}>
                        <span className='text-form'>Usuario | Email</span>
                        <img src="" alt="" /><input type="email" placeholder="exemplo@email.com" />
                        <span className='text-form'>Senha</span>
                        <input type="password" placeholder="************" />
                        <a href="" className='text-link-recuperar'>Esqueceu a Senha?</a>
                        <span className='text-link-criar'>Não tem conta ainda? <a href="">Crie agora mesmo!</a></span>
                        <button type="submit" onClick={ClickNavigate}>Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login