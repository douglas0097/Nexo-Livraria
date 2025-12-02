import { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import apiClient from '../api/apicClient'; 
import './home.css';

// 1. Importar o componente LivroCard e a interface
import LivroCard from '../livroCard/livroCard';
import type { Livro } from '../livrosInterface/livrosInterface'; 

const HomePage = () => {
  // 2. Estados para armazenar os dados e o status da busca
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Função para buscar os livros na API
  useEffect(() => {
    const fetchLivros = async () => {
      try {
        setLoading(true);
        setError(null);

        // Chamada para o endpoint público /api/livros
        const { data } = await apiClient.get('/livros');       

        setLivros(data);
      } catch (err: any) {
        console.error("Erro ao buscar livros:", err);
        setError("Não foi possível carregar os livros. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchLivros();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="homepage-container">
        <section className="hero-section">
          <div className="hero-overlay"></div> 
          <div className="hero-content">
            <h1 className="hero-title">Encontre seu Próximo Grimório</h1>
            <p className="hero-subtitle">
              Explore mundos de magia, aventura e mistério.
            </p>
            <a href="/livros" className="hero-cta-button">
              Ver Coleção
            </a>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Destaques da Semana</h2>

          {/* 4. Tratamento de Estado: Loading/Erro/Dados */}
          {loading && <p className="loading-message">Carregando destaques...</p>}
          
          {error && <p className="error-message">{error}</p>}
          
          {livros.length === 0 && !loading && !error && (
            <p className="no-books-message">Nenhum livro encontrado no catálogo.</p>
          )}

          <div className="book-grid">
            {livros.map((livro) => (
              <LivroCard key={livro.id} livro={livro} />
            ))}
            
            {/* Remova os placeholders de <div className="book-card">...</div> */}

          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;