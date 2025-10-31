import './Login.css'
import logoImage from '../assets/logo_nexo.png'

const Login = () => {
    return (
        <div id="login-container">
            <div id="login-container-content">
                <img id="imagem-logo" src={logoImage} alt="Descrição da imagem" />

                <div id="form-container">
                    <h1 className="login-title">Acesse sua conta</h1>

                    <form className="login-form">
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                        <button type="submit">Entrar</button>
                    </form>
                </div>

            </div>


        </div>
    )
}

export default Login