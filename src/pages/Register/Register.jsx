import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [error, setError] = useState("");
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const actualizarCampo = (e) => {
    const { name, value } = e.target;

    setDatos((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }));

    setError("");
  };

  const crearCuenta = (e) => {
    e.preventDefault();

    const camposVacios = Object.values(datos).some(
      (campo) => campo.trim() === ""
    );

    if (camposVacios) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (!datos.correo.includes("@")) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    if (datos.contrasena.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (datos.contrasena !== datos.confirmarContrasena) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const nuevoUsuario = {
      nombre: datos.nombre.trim(),
      correo: datos.correo.trim().toLowerCase(),
      telefono: datos.telefono.trim(),
      direccion: datos.direccion.trim(),
      contrasena: datos.contrasena,
    };

    localStorage.setItem(
      "usuarioRegistrado",
      JSON.stringify(nuevoUsuario)
    );

    localStorage.removeItem("usuarioAutenticado");
    localStorage.removeItem("usuarioActivo");

    setError("");
    setRegistroExitoso(true);

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <section className="register-page">
      <div className="register-card">
        <div className="register-icon">👤</div>

        <h1>Crear cuenta</h1>

        <p className="register-description">
          Regístrate para consultar tus pedidos, guardar productos favoritos y
          administrar tus datos.
        </p>

        <form className="register-form" onSubmit={crearCuenta}>
          <div className="register-field">
            <label htmlFor="nombre">Nombre completo</label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ingresa tu nombre"
              value={datos.nombre}
              onChange={actualizarCampo}
            />
          </div>

          <div className="register-field">
            <label htmlFor="correoRegistro">Correo electrónico</label>

            <input
              id="correoRegistro"
              name="correo"
              type="email"
              placeholder="correo@ejemplo.com"
              value={datos.correo}
              onChange={actualizarCampo}
            />
          </div>

          <div className="register-field">
            <label htmlFor="telefono">Teléfono</label>

            <input
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="Ingresa tu teléfono"
              value={datos.telefono}
              onChange={actualizarCampo}
            />
          </div>

          <div className="register-field">
            <label htmlFor="direccion">Dirección de envío</label>

            <input
              id="direccion"
              name="direccion"
              type="text"
              placeholder="Ingresa tu dirección"
              value={datos.direccion}
              onChange={actualizarCampo}
            />
          </div>

          <div className="register-field">
            <label htmlFor="contrasenaRegistro">Contraseña</label>

            <div className="register-password-container">
              <input
                id="contrasenaRegistro"
                name="contrasena"
                type={mostrarContrasena ? "text" : "password"}
                placeholder="Mínimo 6 caracteres"
                value={datos.contrasena}
                onChange={actualizarCampo}
              />

              <button
                type="button"
                className="register-password-toggle"
                onClick={() =>
                  setMostrarContrasena(!mostrarContrasena)
                }
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

          <div className="register-field">
            <label htmlFor="confirmarContrasena">
              Confirmar contraseña
            </label>

            <input
              id="confirmarContrasena"
              name="confirmarContrasena"
              type={mostrarContrasena ? "text" : "password"}
              placeholder="Repite tu contraseña"
              value={datos.confirmarContrasena}
              onChange={actualizarCampo}
            />
          </div>

          {error && <p className="register-error">{error}</p>}

          {registroExitoso && (
            <p className="register-success">
              ✅ Cuenta creada correctamente. Serás redirigido al inicio de
              sesión.
            </p>
          )}

          <button
            type="submit"
            className="register-button"
            disabled={registroExitoso}
          >
            {registroExitoso ? "Cuenta creada" : "Crear cuenta"}
          </button>
        </form>

        <p className="register-login">
          ¿Ya tienes una cuenta?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
          >
            Iniciar sesión
          </button>
        </p>
      </div>
    </section>
  );
}

export default Register;