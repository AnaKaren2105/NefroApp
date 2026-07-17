import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleCard from "../../components/ui/ArticleCard";
import hidratacion from "../../assets/hidratacion.png";
import alimentacion from "../../assets/alimentacion.png";
import prevencion from "../../assets/prevencion.png";
import suplementos from "../../assets/suplementos.png";
import "./Articles.css";

function Articles() {
  const [searchParams] = useSearchParams();
  const textoBuscado = searchParams.get("buscar") || "";

  const [busqueda, setBusqueda] = useState(textoBuscado);
  const [categoria, setCategoria] = useState("Todos");
  const [articuloActivo, setArticuloActivo] = useState(null);

  useEffect(() => {
    setBusqueda(textoBuscado);
  }, [textoBuscado]);

  useEffect(() => {
    document.body.style.overflow = articuloActivo ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [articuloActivo]);

  useEffect(() => {
    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setArticuloActivo(null);
      }
    };

    document.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.removeEventListener("keydown", cerrarConEscape);
    };
  }, []);

  const normalizar = (texto) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const articulos = [
    {
      id: 1,
      titulo: "Importancia de la hidratación",
      descripcion:
        "Conoce recomendaciones para mantener una hidratación adecuada y contribuir al cuidado de la salud renal.",
      categoria: "Bienestar",
      imagen: hidratacion,
      contenido: {
        introduccion:
          "El agua es necesaria para el funcionamiento del organismo y ayuda a los riñones a eliminar desechos por medio de la orina. La cantidad adecuada de líquidos puede variar según la edad, el clima, la actividad física y el estado de salud.",
        secciones: [
          {
            titulo: "Mantén una hidratación adecuada",
            texto:
              "Bebe agua regularmente durante el día y aumenta el consumo cuando realices actividad física o te encuentres en un ambiente caluroso.",
          },
          {
            titulo: "Observa las señales de tu cuerpo",
            texto:
              "La sed, la boca seca, el cansancio y una orina más oscura pueden relacionarse con una ingesta insuficiente de líquidos.",
          },
          {
            titulo: "Evita los excesos",
            texto:
              "Beber más agua de la necesaria no mejora automáticamente la función renal. Las personas con enfermedad renal, insuficiencia cardiaca o indicaciones médicas especiales pueden necesitar limitar los líquidos.",
          },
          {
            titulo: "Consulta a un profesional",
            texto:
              "Un médico puede determinar la cantidad adecuada de líquidos cuando existen enfermedades renales, tratamientos de diálisis o problemas para eliminar el exceso de agua.",
          },
        ],
        nota:
          "La recomendación de líquidos no es igual para todas las personas. En enfermedad renal avanzada puede ser necesario controlar o limitar su consumo.",
        enlace:
          "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/healthy-eating-adults-chronic-kidney-disease",
        fuente:
          "Instituto Nacional de Diabetes y Enfermedades Digestivas y Renales (NIDDK)",
      },
    },
    {
      id: 2,
      titulo: "Alimentación saludable",
      descripcion:
        "Descubre hábitos de alimentación que pueden favorecer el bienestar y el cuidado de los riñones.",
      categoria: "Nutrición",
      imagen: alimentacion,
      contenido: {
        introduccion:
          "Una alimentación equilibrada ayuda a mantener un peso saludable y a controlar condiciones como la presión arterial y la diabetes, dos factores estrechamente relacionados con la enfermedad renal.",
        secciones: [
          {
            titulo: "Reduce el consumo de sodio",
            texto:
              "Limita los alimentos procesados, embutidos, sopas instantáneas, botanas saladas y productos con grandes cantidades de sodio.",
          },
          {
            titulo: "Prefiere alimentos frescos",
            texto:
              "Incluye frutas, verduras, cereales y fuentes de proteína apropiadas para tus necesidades personales.",
          },
          {
            titulo: "Revisa las etiquetas",
            texto:
              "Compara productos y elige aquellos con menor cantidad de sodio, azúcares añadidos y grasas saturadas.",
          },
          {
            titulo: "Evita dietas generales para pacientes renales",
            texto:
              "Las necesidades de proteína, potasio, fósforo y líquidos cambian según la función renal y el tratamiento. No todas las personas requieren las mismas restricciones.",
          },
        ],
        nota:
          "Las personas diagnosticadas con enfermedad renal deben elaborar su plan de alimentación con apoyo médico o de un profesional en nutrición.",
        enlace:
          "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/healthy-eating-adults-chronic-kidney-disease",
        fuente:
          "Instituto Nacional de Diabetes y Enfermedades Digestivas y Renales (NIDDK)",
      },
    },
    {
      id: 3,
      titulo: "Prevención renal",
      descripcion:
        "Identifica hábitos cotidianos que ayudan a prevenir complicaciones relacionadas con la salud renal.",
      categoria: "Bienestar",
      imagen: prevencion,
      contenido: {
        introduccion:
          "La prevención renal se relaciona principalmente con el control de las enfermedades y los hábitos que pueden dañar los riñones con el paso del tiempo.",
        secciones: [
          {
            titulo: "Controla la presión arterial",
            texto:
              "La presión arterial alta puede dañar los vasos sanguíneos de los riñones. Realiza mediciones periódicas y sigue el tratamiento indicado.",
          },
          {
            titulo: "Mantén controlada la glucosa",
            texto:
              "La diabetes es uno de los principales factores de riesgo de enfermedad renal crónica. Los controles médicos ayudan a detectar alteraciones oportunamente.",
          },
          {
            titulo: "Realiza actividad física",
            texto:
              "Mantenerse activo contribuye al control del peso, la presión arterial y los niveles de glucosa.",
          },
          {
            titulo: "Evita fumar y limita el alcohol",
            texto:
              "El tabaquismo y el consumo excesivo de alcohol pueden aumentar el riesgo de enfermedades cardiovasculares y presión arterial alta.",
          },
          {
            titulo: "Usa los medicamentos responsablemente",
            texto:
              "No abuses de analgésicos ni te automediques. Algunos medicamentos pueden afectar los riñones, especialmente cuando se usan con frecuencia o durante la deshidratación.",
          },
        ],
        nota:
          "Las personas con diabetes, hipertensión, enfermedad cardiaca o antecedentes familiares deben consultar con qué frecuencia necesitan evaluar su función renal.",
        enlace:
          "https://www.cdc.gov/kidney-disease/prevention/index.html",
        fuente:
          "Centros para el Control y la Prevención de Enfermedades (CDC)",
      },
    },
    {
      id: 4,
      titulo: "Uso responsable de suplementos",
      descripcion:
        "Consulta recomendaciones importantes antes de incorporar suplementos a tu alimentación diaria.",
      categoria: "Suplementos",
      imagen: suplementos,
      contenido: {
        introduccion:
          "Los suplementos pueden contener vitaminas, minerales, hierbas u otros ingredientes. Aunque se vendan sin receta, no todos son adecuados para todas las personas.",
        secciones: [
          {
            titulo: "Consulta antes de consumirlos",
            texto:
              "Informa a tu médico o farmacéutico sobre todos los suplementos, medicamentos y productos naturales que utilizas.",
          },
          {
            titulo: "Evita combinaciones innecesarias",
            texto:
              "Combinar varios productos puede ocasionar un consumo excesivo de ciertos nutrientes o provocar interacciones con medicamentos.",
          },
          {
            titulo: "Ten cuidado con minerales específicos",
            texto:
              "Las personas con problemas renales pueden tener dificultades para eliminar sustancias como el potasio o el fósforo. Un suplemento puede aportar cantidades no apropiadas para su condición.",
          },
          {
            titulo: "No sustituyen el tratamiento médico",
            texto:
              "Un suplemento no debe emplearse como reemplazo de medicamentos, una alimentación equilibrada o la atención de un profesional de la salud.",
          },
          {
            titulo: "Desconfía de promesas extraordinarias",
            texto:
              "Evita productos que aseguren curar enfermedades, limpiar los riñones o producir resultados inmediatos sin evidencia médica.",
          },
        ],
        nota:
          "Antes de tomar cualquier suplemento, especialmente si existe una enfermedad renal o se utilizan medicamentos, se debe solicitar orientación profesional.",
        enlace: "https://ods.od.nih.gov/factsheets/list-all/",
        fuente:
          "Oficina de Suplementos Dietéticos de los Institutos Nacionales de Salud (NIH-ODS)",
      },
    },
  ];

  const articulosFiltrados = articulos.filter((articulo) => {
    const texto = normalizar(busqueda.trim());

    const coincideBusqueda =
      normalizar(articulo.titulo).includes(texto) ||
      normalizar(articulo.descripcion).includes(texto) ||
      normalizar(articulo.categoria).includes(texto);

    const coincideCategoria =
      categoria === "Todos" || articulo.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <section className="articles-page">
      <div className="articles-header">
        <h1>Artículos</h1>

        <p>
          Información y recomendaciones para promover el cuidado responsable de
          la salud renal.
        </p>
      </div>

      <div className="articles-controls">
        <div className="articles-search">
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
          />
        </div>

        <div className="articles-categories">
          {["Todos", "Nutrición", "Bienestar", "Suplementos"].map((item) => (
            <button
              key={item}
              type="button"
              className={categoria === item ? "active" : ""}
              onClick={() => setCategoria(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {articulosFiltrados.length > 0 ? (
        <div className="articles-grid">
          {articulosFiltrados.map((articulo) => (
            <ArticleCard
              key={articulo.id}
              imagen={articulo.imagen}
              titulo={articulo.titulo}
              descripcion={articulo.descripcion}
              onLeerMas={() => setArticuloActivo(articulo)}
            />
          ))}
        </div>
      ) : (
        <div className="articles-empty">
          <h2>No se encontraron artículos</h2>
          <p>Prueba con otra palabra o selecciona una categoría diferente.</p>
        </div>
      )}

      {articuloActivo && (
        <div
          className="article-modal-overlay"
          onClick={() => setArticuloActivo(null)}
        >
          <article
            className="article-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="article-modal-close"
              aria-label="Cerrar artículo"
              onClick={() => setArticuloActivo(null)}
            >
              ×
            </button>

            <img
              className="article-modal-image"
              src={articuloActivo.imagen}
              alt={articuloActivo.titulo}
            />

            <div className="article-modal-content">
              <span className="article-modal-category">
                {articuloActivo.categoria}
              </span>

              <h2 id="article-modal-title">{articuloActivo.titulo}</h2>

              <p className="article-modal-introduction">
                {articuloActivo.contenido.introduccion}
              </p>

              <div className="article-modal-sections">
                {articuloActivo.contenido.secciones.map((seccion) => (
                  <div
                    className="article-modal-section"
                    key={seccion.titulo}
                  >
                    <h3>{seccion.titulo}</h3>
                    <p>{seccion.texto}</p>
                  </div>
                ))}
              </div>

              <div className="article-modal-note">
                <strong>Importante:</strong>{" "}
                {articuloActivo.contenido.nota}
              </div>

              <div className="article-modal-source">
                <a
                  href={articuloActivo.contenido.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📎 Consultar información
                </a>

                <p>
                  <strong>Fuente oficial:</strong>{" "}
                  {articuloActivo.contenido.fuente}
                </p>
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

export default Articles;