import Logo from './logoDrinker.png';

import './HomePageStyle.css';


function HomePage({ isAuthenticated }) {


    const handleLogout = () => {
        // Implemente o código para fazer logout aqui
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
                    <a href="#" onClick={handleLogout}>Sair</a>

                </nav>

            </header>


        </div>
    );
}

export default HomePage;
