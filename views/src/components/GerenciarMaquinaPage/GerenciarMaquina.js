import './GerenciarMaquinaStyle.css';
import React from 'react';
import Header from '../Header/Header';


function GerenciarMaquina() {


  return (
    <div className="home-wrap">
      <Header />
      <div className='titulo-pagina'>
        {/* <span>&#10094; GERENCIAMENTO DE MÁQUINAS</span> */}
      </div>
     
      <div className='filtro'>
          <select id='opcao'>
            <option value="em-andamento">EM ANDAMENTO</option>
            <option value="laranja">Laranja</option>
            <option value="banana">Banana</option>
            <option value="uva">Uva</option>
          </select>
      </div>

    </div>
  );
}

export default GerenciarMaquina;
