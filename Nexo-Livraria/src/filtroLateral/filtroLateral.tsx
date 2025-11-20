import React from 'react';
import { TODOS_OS_GENEROS } from '../livrosInterface/livrosInterface';
import './filtroLateral.css'

const FiltroLateral: React.FC = () => {
    return (
        <div className="filtro-bl-container">
            <h4 className="filtro-bl-titulo">Filtros</h4>
            
            <div className="filtro-bl-secao">
                <h5 className="filtro-bl-subtitulo">Gêneros</h5>
                <div className='filtro-secao-container'>
                    {TODOS_OS_GENEROS.map(genero => (
                        <label key={genero} className="filtro-bl-checkbox-item">
                            <input type="checkbox" name="genero" value={genero} />
                            {genero}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FiltroLateral;