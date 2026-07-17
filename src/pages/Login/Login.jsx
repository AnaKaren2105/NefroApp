import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [recordarme, setRecordarme] = useState(false);
  const [error, setError] = useState("");

  const iniciarSesion = (e) => {
    e.preventDefault();

    if (correo.trim() === "" || contrasena.trim() === "") {
      setError("Por favor completa todos los campos.");
      return;
    }

    const usuarioGuardado = localStorage.getItem("usuarioRegistrado");

    if (!usuarioGuardado) {
      setError("No existe una cuenta registrada. Crea una cuenta primero.");
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);

    const correoIngresado = correo.trim().toLowerCase();

    if (
      correoIngresado !== usuario.correo ||
      contrasena !== usuario.contrasena
    ) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    const usuarioActivo = {
      nombre: usuario.nombre,
      correo: usuario.correo,
      telefono: usuario.telefono,
      direccion: usuario.direccion,
    };

    localStorage.setItem("usuarioAutenticado", "true");
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioActivo));

    if (recordarme) {
      localStorage.setItem("correoUsuario", usuario.correo);
    } else {
      localStorage.removeItem("correoUsuario");
    }

    setError("");
    navigate("/perfil");
    window.location.reload();
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <div className="login-icon">👤</div>

        <h1>Iniciar sesión</h1>

        <p className="login-description">
          Accede a tu cuenta para consultar tu perfil, pedidos y productos
          favoritos.
        </p>

        <form className="login-form" onSubmit={iniciarSesion}>
          <div className="login-field">
            <label htmlFor="correo">Correo electrónico</label>

            <input
              id="correo"
              type="email"
              placeholder="correo@ejemplo.com"
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
                setError("");
              }}
            />
          </div>

          <div className="login-field">
            <label htmlFor="contrasena">Contraseña</label>

            <div className="password-container">
              <input
                id="contrasena"
                type={mostrarContrasena ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                value={contrasena}
                onChange={(e) => {
                  setContrasena(e.target.value);
                  setError("");
                }}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setMostrarContrasena(!mostrarContrasena)}
                aria-label={
                  mostrarContrasena
                    ? "Ocultar contraseña"
                    : "Mostrar contraseña"
                }
              >
                {mostrarContrasena ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label className="remember-option">
              <input
                type="checkbox"
                checked={recordarme}
                onChange={(e) => setRecordarme(e.target.checked)}
              />

              <span>Recordarme</span>
            </label>

            <button type="button" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>

        <p className="login-register">
          ¿Aún no tienes una cuenta?{" "}
          <button
            type="button"
            onClick={() => navigate("/registro")}
          >
            Crear cuenta
          </button>
        </p>
      </div>
    </section>
  );
}

export default Login;