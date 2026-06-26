import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import icono from "../../assets/icono.svg";

function Navbar() {
  const [busqueda, setBusqueda] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [resultadoActivo, setResultadoActivo] = useState(0);
  const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false);
  const [notificacionesLeidas, setNotificacionesLeidas] = useState(false);

  const navigate = useNavigate();
  const searchRef = useRef(null);
  const notificationRef = useRef(null);

  const notificaciones = [
    "Bienvenida a Farmacias Nefrópolis.",
    "Nuevo artículo disponible: Importancia de la hidratación.",
    "Consulta nuestros productos especializados para el cuidado renal.",
  ];

  const normalizar = (texto) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const paginas = [
    {
      titulo: "Inicio",
      descripcion: "Página principal de Farmacias Nefrópolis",
      ruta: "/",
      palabras: ["inicio", "home", "principal", "nefropolis", "farmacias"],
    },
    {
      titulo: "Artículos",
      descripcion: "Consejos e información sobre salud renal",
      ruta: "/articulos",
      palabras: [
        "articulos",
        "articulo",
        "hidratacion",
        "alimentacion",
        "prevencion",
        "nutricion",
        "bienestar",
        "salud renal",
      ],
    },
    {
      titulo: "Productos",
      descripcion: "Catálogo de productos, suplementos y vitaminas",
      ruta: "/productos",
      palabras: [
        "productos",
        "producto",
        "suplementos",
        "suplemento",
        "vitaminas",
        "vitamina",
        "renal",
        "cuidado renal",
        "accesorios",
      ],
    },
    {
      titulo: "Nosotros",
      descripcion: "Conoce la misión, visión y valores de la empresa",
      ruta: "/nosotros",
      palabras: [
        "nosotros",
        "empresa",
        "mision",
        "vision",
        "valores",
        "quienes somos",
        "farmacia",
      ],
    },
    {
      titulo: "Contacto",
      descripcion: "Información para comunicarte con Farmacias Nefrópolis",
      ruta: "/contacto",
      palabras: [
        "contacto",
        "telefono",
        "correo",
        "ubicacion",
        "direccion",
        "mensaje",
      ],
    },
    {
      titulo: "Perfil",
      descripcion: "Información del usuario registrado",
      ruta: "/perfil",
      palabras: ["perfil", "usuario", "cuenta", "ana", "karen"],
    },
  ];

  const resultados = paginas.filter((pagina) => {
    const texto = normalizar(busqueda.trim());

    if (texto === "") return false;

    return (
      normalizar(pagina.titulo).includes(texto) ||
      normalizar(pagina.descripcion).includes(texto) ||
      pagina.palabras.some((palabra) => normalizar(palabra).includes(texto))
    );
  });

  useEffect(() => {
    const cerrarAlHacerClickFuera = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setMostrarResultados(false);
        setResultadoActivo(0);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setMostrarNotificaciones(false);
      }
    };

    document.addEventListener("mousedown", cerrarAlHacerClickFuera);

    return () => {
      document.removeEventListener("mousedown", cerrarAlHacerClickFuera);
    };
  }, []);

  const irAResultado = (resultado) => {
    if (!resultado) return;

    if (resultado.ruta === "/articulos") {
      navigate(`/articulos?buscar=${encodeURIComponent(busqueda.trim())}`);
    } else {
      navigate(resultado.ruta);
    }

    setBusqueda("");
    setMostrarResultados(false);
    setResultadoActivo(0);
  };

  const buscar = () => {
    const texto = busqueda.trim();

    if (texto === "") return;

    if (resultados.length > 0) {
      irAResultado(resultados[resultadoActivo]);
    } else {
      navigate(`/articulos?buscar=${encodeURIComponent(texto)}`);
      setBusqueda("");
      setMostrarResultados(false);
      setResultadoActivo(0);
    }
  };

  const presionarEnter = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();

      setResultadoActivo((prev) =>
        prev < resultados.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();

      setResultadoActivo((prev) =>
        prev > 0 ? prev - 1 : resultados.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      buscar();
    } else if (e.key === "Escape") {
      setMostrarResultados(false);
      setResultadoActivo(0);
    }
  };

  const abrirNotificaciones = () => {
    setMostrarNotificaciones(!mostrarNotificaciones);
    setNotificacionesLeidas(true);
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
          <NavLink to="/nosotros">
            Nosotros
          </NavLink>
        </li>

        <li>
          <NavLink to="/contacto">
            Contacto
          </NavLink>
        </li>
      </ul>

      <div className="navbar-actions">
        <div className="search-container" ref={searchRef}>
          <div className="search-box">
            <input
              type="text"
              placeholder="Buscar..."
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
                setMostrarResultados(true);
                setResultadoActivo(0);
              }}
              onFocus={() => setMostrarResultados(true)}
              onKeyDown={presionarEnter}
            />

            <button type="button" onClick={buscar} className="search-btn">
              🔍
            </button>
          </div>

          {mostrarResultados && busqueda.trim() !== "" && (
            <div className="search-results">
              {resultados.length > 0 ? (
                resultados.map((resultado, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`search-result-item ${
                      resultadoActivo === index ? "active" : ""
                    }`}
                    onClick={() => irAResultado(resultado)}
                  >
                    <strong>{resultado.titulo}</strong>
                    <span>{resultado.descripcion}</span>
                  </button>
                ))
              ) : (
                <div className="search-no-results">
                  No se encontraron resultados
                </div>
              )}
            </div>
          )}
        </div>

        <div className="notification-container" ref={notificationRef}>
          <button
            type="button"
            className="notification-btn"
            onClick={abrirNotificaciones}
          >
            🔔

            {notificaciones.length > 0 && !notificacionesLeidas && (
              <span className="notification-dot"></span>
            )}
          </button>

          {mostrarNotificaciones && (
            <div className="notification-panel">
              <h4>Notificaciones</h4>

              {notificaciones.length > 0 ? (
                notificaciones.map((notificacion, index) => (
                  <div className="notification-item" key={index}>
                    {notificacion}
                  </div>
                ))
              ) : (
                <p className="notification-empty">
                  No tienes notificaciones.
                </p>
              )}
            </div>
          )}
        </div>

        <NavLink to="/perfil" className="user-profile">
          <div className="user-circle">A</div>
          <span>Ana Karen</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;