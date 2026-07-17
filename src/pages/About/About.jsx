import "./About.css";
import equipo from "../../assets/equipo_nefropolis.jpeg";

function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h1>Sobre Nefrópolis</h1>

        <p>
          Nefrópolis es una cadena de tiendas especializadas que ofrece
          productos y servicios necesarios para las personas que viven con
          Enfermedad Renal Crónica.
        </p>
      </div>

      <div className="about-section">
        <h2>¿Quiénes somos?</h2>

        <p>
          Desde 2008, Nefrópolis ha crecido con la misión de sanar el entorno de
          las personas con enfermedad renal. La empresa busca ser un referente
          nacional en nutrición renal mediante su presencia en espacios de
          especialización médica, nutricional y eventos dirigidos a pacientes.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <h3>Nuestra misión</h3>

          <p>
            Sanar el entorno de las personas con enfermedad renal mediante
            productos especializados, atención profesional y asesoría
            nutricional.
          </p>

          <ul>
            <li>Amplio surtido de productos especializados.</li>
            <li>Calidad en el servicio y la atención.</li>
            <li>Disponibilidad de productos.</li>
            <li>Precios justos y competitivos.</li>
          </ul>
        </article>

        <article className="about-card">
          <h3>Propósito</h3>

          <p>Sanar el entorno del paciente renal.</p>
        </article>

        <article className="about-card">
          <h3>Valores</h3>

          <ul>
            <li>Hazte cargo.</li>
            <li>Anticípate y resuelve.</li>
            <li>Ponte en los zapatos del otro.</li>
            <li>Ama lo que haces.</li>
            <li>Desafíate, aprende y mejora.</li>
            <li>Haz lo correcto.</li>
          </ul>
        </article>

        <article className="about-card">
          <h3>Promesa de marca</h3>

          <ul>
            <li>Soluciones efectivas cerca de ti.</li>
            <li>Acompañamiento profesional.</li>
            <li>Disponibilidad de producto.</li>
          </ul>
        </article>
      </div>

      <div className="about-highlight">
        <h2>Nuestro equipo</h2>

        <p>
          Nefrópolis cuenta con profesionales que trabajan diariamente para
          innovar y generar un mayor impacto y bienestar en el entorno de la
          enfermedad renal.
        </p>

        <img
          src={equipo}
          alt="Equipo Nefrópolis"
          className="about-team-image"
        />
      </div>

      <div className="about-social">
        <h2>Responsabilidad Social Empresarial</h2>

        <p>
          Nefrópolis apoya el Pacto Mundial de la Organización de las Naciones
          Unidas, iniciativa que promueve principios relacionados con los
          derechos humanos, las normas laborales, el medio ambiente y la lucha
          contra la corrupción.
        </p>

        <p>
          Desde 2014, Nefrópolis se encuentra adherido a estos principios y
          comparte informes sobre sus acciones responsables y sus resultados.
        </p>
      </div>
    </section>
  );
}

export default About;