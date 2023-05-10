import Logo from './logoDrinker.png';
import './HomePageStyle.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { supabase } from '@supabase/supabase-js';



function HomePage({ isAuthenticated }) {

    const navigate = useNavigate();
    const handleLogout = async (e) => {
      e.preventDefault();
    try {
        await axios.post('/logout');
        // Redireciona o usuário para a página de login
        navigate('/login');
        console.log('Logout realizado com sucesso!');
    } catch (error) {
        // Em caso de erro, exibe a mensagem de erro no console
        console.error(error);
    }
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
