import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="section container">
    <div className="card">
      <h2>Página no encontrada</h2>
      <p>El enlace puede estar mal escrito o el contenido ya no existe.</p>
      <Link className="btn-cart" to="/">
        Volver al inicio
      </Link>
    </div>
  </section>
);

export default NotFound;
