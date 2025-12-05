import { Link } from "react-router-dom";
import ItemListContainer from "../components/products/ItemListContainer/ItemListContainer.jsx";
import heroImg from "../assets/vela-01.jpg";

const HomePage = () => {
  return (
    <>
      <section className="hero hero-home">
        <div className="container hero-home__content">
          <div className="hero-home__text">
            <p className="hero-eyebrow">Colección 2025</p>
            <h1>Transforma tus espacios con luz cálida y aroma natural.</h1>
            <p className="hero-subtitle">
              Velas de soja artesanales, creadas para acompañar tus momentos de calma,
              lectura y rituales de autocuidado.
            </p>
            <div className="hero-actions">
              <Link to="/" className="btn-cart">
                Ver colección completa
              </Link>
              <Link to="/category/decorativas" className="btn-secondary">
                Decorativas
              </Link>
              <Link to="/category/premium" className="btn-secondary">
                Premium
              </Link>
            </div>
          </div>

          <div className="hero-home__image">
            <img src={heroImg} alt="Velas decorando un espacio" />
          </div>
        </div>
      </section>

      <section className="section container">
        <header className="section-header">
          <h2 className="section-title">Nuestras velas favoritas</h2>
          <p className="section-subtitle">
            Una selección de piezas que combinan diseño minimalista y aromas suaves.
          </p>
        </header>

        <ItemListContainer />
      </section>
    </>
  );
};

export default HomePage;
