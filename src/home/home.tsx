import Navbar from '../navbar/navbar';
import './home.css';

const HomePage = () => {
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

          <div className="book-grid">
            <div className="book-card">
              <div className="book-cover-placeholder">
                <span>Capa</span>
              </div>
              <div className="book-info">
                <h3>O Nome do Vento</h3>
                <p>Patrick Rothfuss</p>
              </div>
            </div>

            <div className="book-card">
              <div className="book-cover-placeholder">
                <span>Capa</span>
              </div>
              <div className="book-info">
                <h3>Mistborn: O Império Final</h3>
                <p>Brandon Sanderson</p>
              </div>
            </div>

            <div className="book-card">
              <div className="book-cover-placeholder">
                <span>Capa</span>
              </div>
              <div className="book-info">
                <h3>A Roda do Tempo</h3>
                <p>Robert Jordan</p>
              </div>
            </div>

            <div className="book-card">
              <div className="book-cover-placeholder">
                <span>Capa</span>
              </div>
              <div className="book-info">
                <h3>O Ritual</h3>
                <p>Adam Nevill</p>
              </div>
            </div>

              <div className="book-card">
              <div className="book-cover-placeholder">
                <span>Capa</span>
              </div>
              <div className="book-info">
                <h3>O caminho dos Reis</h3>
                <p>Brandon Sanderson</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;