import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import icono from "../../assets/icono.svg";

function Navbar() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const buscar = () => {
    if (busqueda.trim() !== "") {
      navigate(`/articulos?buscar=${encodeURIComponent(busqueda.trim())}`);
      setBusqueda("");
    }
  };

  const presionarEnter = (e) => {
    if (e.key === "Enter") {
      buscar();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">
         <img src={icono} alt="Nefrópolis" />
           </div>

        <div className="navbar-title">
          <h2>Farmacias</h2>
          <h2>Nefrópolis</h2>
        </div>
      </div>

      <ul className="navbar-menu">
        <li>
          <NavLink to="/" end>
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/articulos">
            Artículos
          </NavLink>
        </li>

        <li>
          <NavLink to="/productos">
            Productos
          </NavLink>
        </li>

        <li>
          <NavLink to="/suplementos">
            Suplementos
          </NavLink>
        </li>

        <li>
          <NavLink to="/contacto">
            Contacto
          </NavLink>
        </li>
      </ul>

      <div className="navbar-actions">
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyDown={presionarEnter}
          />
          <button type="button" onClick={buscar} className="search-btn">
            🔍
          </button>
        </div>

        <button className="notification-btn">🔔</button>

        <NavLink to="/perfil" className="user-profile">
         <div className="user-circle">A</div>
         <span>Ana Karen</span>
         </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;