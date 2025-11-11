// src/components/NavBar.jsx
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/VelaVita-Logo.svg";

const CATEGORIES = [
    { id: "arcos", label: "Arcos" },
    { id: "geometricas", label: "Geométricas" },
    { id: "clasicas", label: "Clásicas" },
];

const NavBar = () => {
    const linkStyle = ({ isActive }) => ({
        textDecoration: "none",
        fontWeight: isActive ? 700 : 500,
        borderBottom: isActive ? "2px solid var(--vv-ink)" : "2px solid transparent",
        paddingBottom: 2,
    });

    return (
        <header className="header">
            <div className="container nav">
                <Link to="/" className="brand" aria-label="Vela Vita - Inicio">
                    <img src={logo} alt="Logo Vela Vita" />
                </Link>
                <ul className="nav-links" aria-label="Categorías">
                    <li><NavLink style={linkStyle} to="/">Inicio</NavLink></li>
                    {CATEGORIES.map(c => (
                        <li key={c.id}>
                            <NavLink style={linkStyle} to={`/category/${c.id}`}>{c.label}</NavLink>
                        </li>
                    ))}
                </ul>
                <CartWidget />
            </div>
        </header>
    );
};

export default NavBar;
