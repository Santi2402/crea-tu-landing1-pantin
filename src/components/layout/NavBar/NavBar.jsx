import { NavLink, Link } from "react-router-dom";
import CartWidget from "../../cart/CartWidget/CartWidget.jsx";
import logo from "../../../assets/VelaVita-Logo.svg";

const CATEGORIES = [
  { id: "decorativas", label: "Decorativas" },
  { id: "premium", label: "Premium" },
  { id: "minimalistas", label: "Minimalistas" },
  { id: "navidad", label: "Navidad" }
];

const NavBar = () => {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontWeight: isActive ? 700 : 500,
    borderBottom: isActive ? "2px solid var(--vv-ink)" : "2px solid transparent",
    paddingBottom: 2
  });

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand" aria-label="Vela Vita - Inicio">
          <img src={logo} alt="Logo Vela Vita" />
        </Link>

        <nav aria-label="Navegación principal">
          <ul className="nav-links">
            <li>
              <NavLink style={linkStyle} to="/">
                Inicio
              </NavLink>
            </li>
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <NavLink style={linkStyle} to={`/category/${c.id}`}>
                  {c.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
