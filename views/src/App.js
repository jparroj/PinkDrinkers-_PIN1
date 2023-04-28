import './components/LoginPage/LoginStyle.css';
import './App.css';
import Login from './components/LoginPage/Login';
import HomePage from './components/TelaInicialPage/HomePage';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Routes>
        {/* Componente da tela inicial */}
        <Route index element={<Login/>} />
        {/* Adicione esta rota */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
