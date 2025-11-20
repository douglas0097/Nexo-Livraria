import React, { useState } from 'react';
import LivroGrade from '../livroGrade/livroGrade'
import FiltroLateral from '../filtroLateral/filtroLateral';
import Navbar from '../navbar/navbar';
import { LIVROS_SIMULADOS } from '../livrosInterface/livrosInterface';
import './livros.css'

const Livros: React.FC = () => {
    const [livrosParaExibir] = useState(LIVROS_SIMULADOS); 

    return (
        <div className="colecao-container">
            <Navbar></Navbar>
            <h1 className="themed-titulo-centralizado">O Catálogo de Grimórios</h1>

            <div className="colecao-layout-duas-colunas">
                <aside className="barra-lateral-container">
                    <FiltroLateral />
                </aside>
                <main className="grade-container-principal">
                    <LivroGrade livros={livrosParaExibir} />
                </main>
            </div>
        </div>
    );
}

export default Livros;