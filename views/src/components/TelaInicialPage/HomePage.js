import Logo from './logoDrinker.png';
import './HomePageStyle.css';
import { useNavigate } from 'react-router-dom';

function HomePage({ isAuthenticated }) {

    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        // Remove o token JWT e o refresh token do local storage
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        // Implemente o código para fazer logout aqui
        navigate('/login');
        console.log('Logout realizado com sucesso!');

    };

    return (
        <div className="home-wrap">

            <header className="header">

                <img src={Logo} alt="Logo" className="logo" />
                <div>
                    Olá, Lucas
                </div>

                <nav className="nav">
                    <a href='https://www.w3schools.com'>HOME</a>
                    <a href='https://developer.mozilla.org/pt-BR/'>GERENCIAR</a>
                    <a href='https://github.com/'>SOLICITAÇÕES</a>
                    <a href="Sair" onClick={handleLogout}>
                        <span className="icon"></span>
                        Sair
                    </a>



                </nav>

            </header>


        </div>
    );
}

export default HomePage;
