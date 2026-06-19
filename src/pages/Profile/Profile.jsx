import "./Profile.css";

function Profile() {
  return (
    <section className="profile-page">
      <div className="profile-card">
        <div className="profile-avatar">U</div>

        <h1>Perfil de usuario</h1>
        <p className="profile-description">
          Información general del usuario registrado.
        </p>

        <div className="profile-info">
          <p><strong>Nombre:</strong> Usuario Nefrópolis</p>
          <p><strong>Correo:</strong> usuario@nefropolis.com</p>
          <p><strong>Teléfono:</strong> (33) 0000 0000</p>
          <p><strong>Tipo:</strong> Cliente</p>
        </div>

        <button>Editar perfil</button>
      </div>
    </section>
  );
}

export default Profile;