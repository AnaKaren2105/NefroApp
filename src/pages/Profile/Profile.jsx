import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const usuarioGuardado = localStorage.getItem("usuarioActivo");

  const usuarioInicial = usuarioGuardado
    ? JSON.parse(usuarioGuardado)
    : {
        nombre: "",
        correo: "",
        telefono: "",
        direccion: "",
      };

  const [editando, setEditando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState("");
  const [datosUsuario, setDatosUsuario] = useState(usuarioInicial);
  const [datosTemporales, setDatosTemporales] = useState(usuarioInicial);

  const abrirEdicion = () => {
    setDatosTemporales(datosUsuario);
    setMensajeExito("");
    setEditando(true);
  };

  const cancelarEdicion = () => {
    setDatosTemporales(datosUsuario);
    setMensajeExito("");
    setEditando(false);
  };

  const guardarCambios = (e) => {
    e.preventDefault();

    const datosActualizados = {
      nombre: datosTemporales.nombre.trim(),
      correo: datosTemporales.correo.trim().toLowerCase(),
      telefono: datosTemporales.telefono.trim(),
      direccion: datosTemporales.direccion.trim(),
    };

    setDatosUsuario(datosActualizados);
    localStorage.setItem(
      "usuarioActivo",
      JSON.stringify(datosActualizados)
    );

    const usuarioRegistrado = localStorage.getItem("usuarioRegistrado");

    if (usuarioRegistrado) {
      const usuario = JSON.parse(usuarioRegistrado);

      localStorage.setItem(
        "usuarioRegistrado",
        JSON.stringify({
          ...usuario,
          ...datosActualizados,
        })
      );
    }

    setEditando(false);
    setMensajeExito("✅ Perfil actualizado correctamente.");

    setTimeout(() => {
      setMensajeExito("");
    }, 4000);
  };

  const cerrarSesion = () => {
    localStorage.removeItem("usuarioAutenticado");
    localStorage.removeItem("usuarioActivo");
    localStorage.removeItem("correoUsuario");

    navigate("/login");
    window.location.reload();
  };

  if (!usuarioGuardado) {
    return (
      <section className="profile-page">
        <div className="profile-card">
          <div className="profile-avatar">👤</div>

          <h1>Sesión no iniciada</h1>

          <p className="profile-description">
            Inicia sesión para consultar y administrar tu cuenta.
          </p>

          <div className="profile-buttons">
            <button
              type="button"
              className="edit-btn"
              onClick={() => navigate("/login")}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="profile-page">
      <div className="profile-card">
        <div className="profile-avatar">👤</div>

        <h1>Mi perfil</h1>

        <p className="profile-description">
          Consulta y administra la información de tu cuenta.
        </p>

        {!editando ? (
          <>
            <div className="profile-info">
              <p>
                <strong>Nombre:</strong> {datosUsuario.nombre}
              </p>

              <p>
                <strong>Correo:</strong> {datosUsuario.correo}
              </p>

              <p>
                <strong>Teléfono:</strong> {datosUsuario.telefono}
              </p>

              <p>
                <strong>Dirección de envío:</strong>{" "}
                {datosUsuario.direccion}
              </p>
            </div>

            <div className="profile-buttons">
              <button
                type="button"
                className="edit-btn"
                onClick={abrirEdicion}
              >
                Editar perfil
              </button>

              <button
                type="button"
                className="logout-btn"
                onClick={cerrarSesion}
              >
                Cerrar sesión
              </button>
            </div>
          </>
        ) : (
          <form className="profile-edit-form" onSubmit={guardarCambios}>
            <div className="profile-field">
              <label htmlFor="nombre">Nombre</label>

              <input
                id="nombre"
                type="text"
                value={datosTemporales.nombre}
                onChange={(e) =>
                  setDatosTemporales({
                    ...datosTemporales,
                    nombre: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="profile-field">
              <label htmlFor="correo">Correo electrónico</label>

              <input
                id="correo"
                type="email"
                value={datosTemporales.correo}
                onChange={(e) =>
                  setDatosTemporales({
                    ...datosTemporales,
                    correo: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="profile-field">
              <label htmlFor="telefono">Teléfono</label>

              <input
                id="telefono"
                type="text"
                value={datosTemporales.telefono}
                onChange={(e) =>
                  setDatosTemporales({
                    ...datosTemporales,
                    telefono: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="profile-field">
              <label htmlFor="direccion">Dirección de envío</label>

              <input
                id="direccion"
                type="text"
                value={datosTemporales.direccion}
                onChange={(e) =>
                  setDatosTemporales({
                    ...datosTemporales,
                    direccion: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="profile-edit-buttons">
              <button type="submit" className="save-btn">
                Guardar cambios
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={cancelarEdicion}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}

        {mensajeExito && (
          <p className="profile-success-message">{mensajeExito}</p>
        )}

        <div className="profile-sections">
          <div className="profile-extra-card">
            <div className="profile-icon">📦</div>

            <h3>Mis pedidos</h3>

            <p>
              Cuando realices una compra, aquí podrás consultar el estado de
              tus pedidos.
            </p>
          </div>

          <div className="profile-extra-card">
            <div className="profile-icon">❤️</div>

            <h3>Productos favoritos</h3>

            <p>
              Guarda tus productos favoritos para consultarlos después.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;