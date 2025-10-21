import CartWidget from "./CartWidget";
import logo from "../assets/VelaVita-Logo.svg";

const NavBar = () => {
    return (
        <header className="header">
            <div className="container nav">
                <a href="/" className="brand" aria-label="Vela Vita - Inicio">
                    <img src={logo} alt="Logo Vela Vita" />
                </a>

                <ul className="nav-links" role="navigation" aria-label="Navegación principal">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#catalogo">Catálogo</a></li>
                    <li><a href="#aromas">Aromas</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>

                <CartWidget />
            </div>

            <div className="claim">Velas artesanales con aromas que transforman tus momentos ✨</div>
        </header>
    );
};

export default NavBar;
