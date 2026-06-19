import "./Profile.css";

function Profile() {
  return (
    <section className="profile-page">
      <div className="profile-card">
       <div className="profile-avatar">A</div>

        <h1>Perfil de usuario</h1>
        <p className="profile-description">
          Información general del usuario registrado.
        </p>

        <div className="profile-info">
          <p><strong>Nombre:</strong> Karen Romo</p>
            <p><strong>Correo:</strong> karen.romo@gmail.com</p>
          <p><strong>Teléfono:</strong> (33) 2020 2020</p>
        <p><strong>Tipo:</strong> Administrador</p>
        </div>

        <button>Editar perfil</button>
      </div>
    </section>
  );
}

export default Profile;