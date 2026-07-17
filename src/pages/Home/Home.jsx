import { useEffect, useRef, useState } from "react";
import "./Home.css";

import FeatureCard from "../../components/ui/FeatureCard";

import rinonBueno from "../../assets/logo_inicio.png";
import informacion from "../../assets/informacion.png";
import prevencion from "../../assets/productos.png";
import consejos from "../../assets/consejos.png";
import enfermedades from "../../assets/envios.png";
import tablaNutricion from "../../assets/tabla_nutricion.png";

const fuentesInformacion = [
  {
    titulo: "Enfermedad Renal Crónica",
    descripcion:
      "Conoce qué es la enfermedad renal, sus principales factores de riesgo y la importancia de detectarla oportunamente.",
    enlace:
      "https://www.niddk.nih.gov/health-information/informacion-de-la-salud/enfermedades-rinones/informacion-general/que-es",
    fuente:
      "Instituto Nacional de la Diabetes y las Enfermedades Digestivas y Renales (NIDDK)",
  },
  {
    titulo: "Hipertensión arterial",
    descripcion:
      "Infórmate sobre la presión arterial alta, sus factores de riesgo y la importancia de mantenerla bajo control.",
    enlace:
      "https://www.who.int/es/news-room/fact-sheets/detail/hypertension",
    fuente: "Organización Mundial de la Salud (OMS)",
  },
  {
    titulo: "Diabetes",
    descripcion:
      "Aprende qué es la diabetes, cómo afecta al organismo y por qué su control ayuda a prevenir complicaciones.",
    enlace:
      "https://www.cdc.gov/diabetes/es/about/acerca-de-la-diabetes.html",
    fuente:
      "Centros para el Control y la Prevención de Enfermedades (CDC)",
  },
  {
    titulo: "Nutrición",
    descripcion:
      "Consulta orientación sobre alimentación para personas que viven con diabetes y enfermedad renal.",
    enlace:
      "https://www.cdc.gov/diabetes/es/healthy-eating/diabetes-y-enfermedad-renal-que-comer.html",
    fuente:
      "Centros para el Control y la Prevención de Enfermedades (CDC)",
  },
  {
    titulo: "Chequeos médicos",
    descripcion:
      "Conoce las pruebas que ayudan a revisar el funcionamiento de los riñones y a detectar alteraciones en etapas tempranas.",
    enlace:
      "https://www.niddk.nih.gov/health-information/informacion-de-la-salud/enfermedades-rinones/informacion-general/diagnostico",
    fuente:
      "Instituto Nacional de la Diabetes y las Enfermedades Digestivas y Renales (NIDDK)",
  },
  {
    titulo: "Prevención",
    descripcion:
      "Identifica hábitos y factores de riesgo relacionados con enfermedades crónicas que pueden afectar la calidad de vida.",
    enlace:
      "https://www.who.int/es/news-room/fact-sheets/detail/noncommunicable-diseases",
    fuente: "Organización Mundial de la Salud (OMS)",
  },
];

const recomendacionesPrevencion = [
  {
    titulo: "Controla tu presión arterial",
    descripcion:
      "La hipertensión puede avanzar sin presentar síntomas. Medir la presión periódicamente ayuda a identificar alteraciones y buscar atención profesional.",
    enlace:
      "https://www.who.int/es/news-room/fact-sheets/detail/hypertension",
    fuente: "Organización Mundial de la Salud (OMS)",
  },
  {
    titulo: "Vigila tus niveles de glucosa",
    descripcion:
      "El control de la diabetes ayuda a disminuir el riesgo de complicaciones que pueden afectar los riñones, el corazón y otros órganos.",
    enlace:
      "https://www.cdc.gov/diabetes/es/about/acerca-de-la-diabetes.html",
    fuente:
      "Centros para el Control y la Prevención de Enfermedades (CDC)",
  },
  {
    titulo: "Cuida tu alimentación",
    descripcion:
      "Una alimentación equilibrada y adaptada a las necesidades de cada persona contribuye al cuidado de la salud y al control de enfermedades crónicas.",
    enlace:
      "https://www.who.int/es/news-room/fact-sheets/detail/healthy-diet",
    fuente: "Organización Mundial de la Salud (OMS)",
  },
  {
    titulo: "Realiza actividad física",
    descripcion:
      "Mantenerse activo favorece el bienestar general, ayuda a controlar el peso y puede mejorar la presión arterial y los niveles de glucosa.",
    enlace:
      "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity",
    fuente: "Organización Mundial de la Salud (OMS)",
  },
  {
    titulo: "Evita automedicarte",
    descripcion:
      "Algunos medicamentos pueden representar riesgos cuando se consumen sin orientación profesional, especialmente si existen problemas renales.",
    enlace:
      "https://www.niddk.nih.gov/health-information/informacion-de-la-salud/enfermedades-rinones/medicamentos-rinones",
    fuente:
      "Instituto Nacional de la Diabetes y las Enfermedades Digestivas y Renales (NIDDK)",
  },
  {
    titulo: "Acude a revisiones médicas",
    descripcion:
      "Los chequeos periódicos permiten conocer el estado de salud, detectar factores de riesgo y recibir recomendaciones personalizadas.",
    enlace:
      "https://www.niddk.nih.gov/health-information/informacion-de-la-salud/enfermedades-rinones/informacion-general/diagnostico",
    fuente:
      "Instituto Nacional de la Diabetes y las Enfermedades Digestivas y Renales (NIDDK)",
  },
];

const enfermedadesRelacionadas = [
  {
    titulo: "Diabetes",
    descripcion:
      "Los niveles elevados de glucosa durante periodos prolongados pueden dañar los vasos sanguíneos y afectar el funcionamiento de los riñones.",
    enlace:
      "https://www.niddk.nih.gov/health-information/informacion-de-la-salud/diabetes/informacion-general/prevenir-problemas/enfermedad-rinones",
    fuente:
      "Instituto Nacional de la Diabetes y las Enfermedades Digestivas y Renales (NIDDK)",
  },
  {
    titulo: "Hipertensión arterial",
    descripcion:
      "La presión arterial alta puede dañar los vasos sanguíneos de los riñones y dificultar la eliminación adecuada de desechos del organismo.",
    enlace:
      "https://www.niddk.nih.gov/health-information/informacion-de-la-salud/enfermedades-rinones/presion-arterial-alta",
    fuente:
      "Instituto Nacional de la Diabetes y las Enfermedades Digestivas y Renales (NIDDK)",
  },
  {
    titulo: "Enfermedades cardiovasculares",
    descripcion:
      "El corazón y los riñones trabajan de manera relacionada. Las alteraciones en uno de estos órganos pueden aumentar el riesgo de complicaciones en el otro.",
    enlace:
      "https://www.cdc.gov/kidney-disease/es/about/enfermedad-renal-cronica.html",
    fuente:
      "Centros para el Control y la Prevención de Enfermedades (CDC)",
  },
];

function Home() {
  const [modalActivo, setModalActivo] = useState(null);
  const modalRef = useRef(null);

  const abrirModal = (nombreModal) => {
    setModalActivo(nombreModal);
  };

  const cerrarModal = () => {
    setModalActivo(null);
  };

  const manejarTecladoTarjeta = (event, nombreModal) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      abrirModal(nombreModal);
    }
  };

  const manejarClickOverlay = (event) => {
    if (event.target === event.currentTarget) {
      cerrarModal();
    }
  };

  useEffect(() => {
    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        cerrarModal();
      }
    };

    if (modalActivo) {
      document.addEventListener("keydown", cerrarConEscape);
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        modalRef.current?.focus();
      }, 0);
    }

    return () => {
      document.removeEventListener("keydown", cerrarConEscape);
      document.body.style.overflow = "";
    };
  }, [modalActivo]);

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Tu salud renal es nuestra prioridad</h1>

          <p>
            Información confiable, consejos de prevención y orientación para
            promover hábitos saludables y una mejor calidad de vida.
          </p>

          <button
            type="button"
            onClick={() => abrirModal("informacion")}
          >
            Conoce más
          </button>
        </div>

        <div className="kidney-shape">
          <img
            src={rinonBueno}
            alt="Ilustración relacionada con el cuidado de la salud renal"
          />
        </div>
      </section>

      <section
        className="features"
        aria-label="Información destacada"
      >
        <div
          className="feature-card-action"
          role="button"
          tabIndex={0}
          onClick={() => abrirModal("informacion")}
          onKeyDown={(event) =>
            manejarTecladoTarjeta(event, "informacion")
          }
        >
          <FeatureCard
            icon={informacion}
            title="Información confiable"
            description="Conoce información sobre salud renal, diabetes, hipertensión, nutrición, chequeos médicos y prevención."
          />
        </div>

        <div
          className="feature-card-action"
          role="button"
          tabIndex={0}
          onClick={() => abrirModal("consejos")}
          onKeyDown={(event) =>
            manejarTecladoTarjeta(event, "consejos")
          }
        >
          <FeatureCard
            icon={consejos}
            title="Consejos de expertos"
            description="Consulta una guía visual de nutrición con recomendaciones para promover hábitos saludables."
          />
        </div>

        <div
          className="feature-card-action"
          role="button"
          tabIndex={0}
          onClick={() => abrirModal("prevencion")}
          onKeyDown={(event) =>
            manejarTecladoTarjeta(event, "prevencion")
          }
        >
          <FeatureCard
            icon={prevencion}
            title="Prevención y bienestar"
            description="Descubre acciones sencillas que pueden ayudarte a cuidar tu salud y prevenir complicaciones."
          />
        </div>

        <div
          className="feature-card-action"
          role="button"
          tabIndex={0}
          onClick={() => abrirModal("enfermedades")}
          onKeyDown={(event) =>
            manejarTecladoTarjeta(event, "enfermedades")
          }
        >
          <FeatureCard
            icon={enfermedades}
            title="Enfermedades relacionadas"
            description="Conoce la relación entre la diabetes, la hipertensión, el corazón y la salud de los riñones."
          />
        </div>
      </section>

      {modalActivo === "informacion" && (
        <div
          className="home-modal-overlay"
          onMouseDown={manejarClickOverlay}
        >
          <section
            className="home-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-informacion"
            tabIndex={-1}
            ref={modalRef}
          >
            <button
              type="button"
              className="home-modal-close"
              onClick={cerrarModal}
              aria-label="Cerrar ventana"
            >
              ×
            </button>

            <header className="home-modal-header">
              <span>Orientación para tu bienestar</span>

              <h2 id="titulo-modal-informacion">
                Información confiable
              </h2>

              <p>
                Consulta información general sobre temas relacionados con la
                salud renal y accede a instituciones oficiales para conocer
                más detalles.
              </p>
            </header>

            <div className="home-modal-content">
              {fuentesInformacion.map((item) => (
                <article
                  className="home-info-item"
                  key={item.titulo}
                >
                  <h3>{item.titulo}</h3>

                  <p>{item.descripcion}</p>

                  <a
                    className="home-source-link"
                    href={item.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">📎</span>
                    Consultar información
                  </a>

                  <small className="home-source-name">
                    <strong>Fuente oficial:</strong> {item.fuente}
                  </small>
                </article>
              ))}
            </div>

            <p className="home-modal-warning">
              Esta información es únicamente orientativa y no sustituye una
              valoración, diagnóstico o tratamiento indicado por un
              profesional de la salud.
            </p>

            <button
              type="button"
              className="home-modal-button"
              onClick={cerrarModal}
            >
              Cerrar
            </button>
          </section>
        </div>
      )}

            {modalActivo === "consejos" && (
        <div
          className="home-modal-overlay"
          onMouseDown={manejarClickOverlay}
        >
          <section
            className="home-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-consejos"
            tabIndex={-1}
            ref={modalRef}
          >
            <button
              type="button"
              className="home-modal-close"
              onClick={cerrarModal}
              aria-label="Cerrar ventana"
            >
              ×
            </button>

            <header className="home-modal-header">
              <span>Guía de alimentación</span>

              <h2 id="titulo-modal-consejos">
                Consejos de expertos
              </h2>

              <p>
                Consulta la tabla de nutrición para el cuidado de tu salud,
                con recomendaciones generales que pueden ayudarte a tomar
                mejores decisiones en tu alimentación.
              </p>
            </header>

            <div className="home-nutrition-layout">
              <div className="home-nutrition-image">
                <img
                  src={tablaNutricion}
                  alt="Tabla de nutrición para el cuidado de la salud"
                />
              </div>

              <article className="home-nutrition-info">
                <h3>
                  Recomendaciones para una alimentación saludable
                </h3>

                <p>
                  La alimentación debe adaptarse a las condiciones de salud,
                  necesidades nutricionales y recomendaciones médicas de cada
                  persona.
                </p>

                <ul className="home-nutrition-list">
                  <li>
                    Incluye alimentos variados y porciones adecuadas.
                  </li>

                  <li>
                    Modera el consumo de productos con exceso de sodio.
                  </li>

                  <li>
                    Prefiere alimentos frescos sobre los ultraprocesados.
                  </li>

                  <li>
                    Mantén horarios regulares para tus comidas.
                  </li>

                  <li>
                    Consulta a un profesional antes de hacer restricciones
                    importantes en tu alimentación.
                  </li>
                </ul>

                <div className="home-nutrition-note">
                  Las necesidades de líquidos, proteínas, potasio, fósforo y
                  sodio pueden variar cuando existe una enfermedad renal.
                </div>

                <a
                  className="home-source-link"
                  href="https://www.cdc.gov/diabetes/es/healthy-eating/diabetes-y-enfermedad-renal-que-comer.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span aria-hidden="true">📎</span>
                  Consultar información
                </a>

                <small className="home-source-name">
                  <strong>Fuente oficial:</strong> Centros para el Control y
                  la Prevención de Enfermedades (CDC)
                </small>
              </article>
            </div>

            <p className="home-modal-warning">
              La tabla y las recomendaciones tienen un propósito informativo.
              Un profesional de nutrición puede elaborar un plan adecuado
              según las necesidades particulares de cada persona.
            </p>

            <button
              type="button"
              className="home-modal-button"
              onClick={cerrarModal}
            >
              Cerrar
            </button>
          </section>
        </div>
      )}

      {modalActivo === "prevencion" && (
        <div
          className="home-modal-overlay"
          onMouseDown={manejarClickOverlay}
        >
          <section
            className="home-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-prevencion"
            tabIndex={-1}
            ref={modalRef}
          >
            <button
              type="button"
              className="home-modal-close"
              onClick={cerrarModal}
              aria-label="Cerrar ventana"
            >
              ×
            </button>

            <header className="home-modal-header">
              <span>Hábitos saludables</span>

              <h2 id="titulo-modal-prevencion">
                Prevención y bienestar
              </h2>

              <p>
                Incorporar hábitos saludables y revisar periódicamente el
                estado de salud puede ayudar a identificar factores de riesgo
                antes de que aparezcan complicaciones.
              </p>
            </header>

            <div className="home-prevention-grid">
              {recomendacionesPrevencion.map((item) => (
                <article
                  className="home-prevention-item"
                  key={item.titulo}
                >
                  <h3>{item.titulo}</h3>

                  <p>{item.descripcion}</p>

                  <a
                    className="home-source-link"
                    href={item.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">📎</span>
                    Consultar información
                  </a>

                  <small className="home-source-name">
                    <strong>Fuente oficial:</strong> {item.fuente}
                  </small>
                </article>
              ))}
            </div>

            <p className="home-modal-warning">
              Las recomendaciones generales no sustituyen las indicaciones de
              un profesional. Ante síntomas o cambios en tu estado de salud,
              solicita atención médica.
            </p>

            <button
              type="button"
              className="home-modal-button"
              onClick={cerrarModal}
            >
              Cerrar
            </button>
          </section>
        </div>
      )}

            {modalActivo === "enfermedades" && (
        <div
          className="home-modal-overlay"
          onMouseDown={manejarClickOverlay}
        >
          <section
            className="home-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-enfermedades"
            tabIndex={-1}
            ref={modalRef}
          >
            <button
              type="button"
              className="home-modal-close"
              onClick={cerrarModal}
              aria-label="Cerrar ventana"
            >
              ×
            </button>

            <header className="home-modal-header">
              <span>Conoce los factores de riesgo</span>

              <h2 id="titulo-modal-enfermedades">
                Enfermedades relacionadas
              </h2>

              <p>
                Algunas enfermedades crónicas pueden afectar el funcionamiento
                de los riñones. Su detección y control ayudan a reducir el
                riesgo de complicaciones.
              </p>
            </header>

            <div className="home-disease-grid">
              {enfermedadesRelacionadas.map((item) => (
                <article
                  className="home-disease-item"
                  key={item.titulo}
                >
                  <h3>{item.titulo}</h3>

                  <p>{item.descripcion}</p>

                  <a
                    className="home-source-link"
                    href={item.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">📎</span>
                    Consultar información
                  </a>

                  <small className="home-source-name">
                    <strong>Fuente oficial:</strong> {item.fuente}
                  </small>
                </article>
              ))}

              <article className="home-disease-relation">
                <h3>¿Cómo se relacionan estas enfermedades?</h3>

                <p>
                  La diabetes y la hipertensión son dos de las principales
                  causas de enfermedad renal crónica. Cuando estas
                  enfermedades no se controlan adecuadamente pueden provocar
                  daño progresivo en los riñones. A su vez, la enfermedad
                  renal incrementa el riesgo de presentar problemas
                  cardiovasculares, por lo que el diagnóstico oportuno y el
                  seguimiento médico son fundamentales para mantener una buena
                  calidad de vida.
                </p>
              </article>
            </div>

            <p className="home-modal-warning">
              Si presentas diabetes, hipertensión u otra enfermedad crónica,
              consulta con un profesional de la salud sobre la frecuencia con
              la que debes revisar el funcionamiento de tus riñones.
            </p>

            <button
              type="button"
              className="home-modal-button"
              onClick={cerrarModal}
            >
              Cerrar
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default Home;