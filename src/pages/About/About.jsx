import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h1>Nosotros</h1>
        <p>
          En Farmacias Nefrópolis trabajamos para ofrecer información confiable,
          orientación y productos especializados enfocados en el cuidado de la salud renal.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>¿Quiénes somos?</h3>
          <p>
            Somos una farmacia enfocada en brindar apoyo a personas interesadas
            en cuidar su salud renal mediante productos especializados e información clara.
          </p>
        </div>

        <div className="about-card">
          <h3>Misión</h3>
          <p>
            Brindar información y productos que contribuyan al bienestar de los usuarios,
            promoviendo el cuidado preventivo y responsable de la salud renal.
          </p>
        </div>

        <div className="about-card">
          <h3>Visión</h3>
          <p>
            Ser una plataforma confiable para quienes buscan orientación y productos
            relacionados con el cuidado renal.
          </p>
        </div>

        <div className="about-card">
          <h3>Valores</h3>
          <p>
            Compromiso, responsabilidad, empatía, honestidad y confianza en cada servicio ofrecido.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;