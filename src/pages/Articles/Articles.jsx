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

  useEffect(() => {
    setBusqueda(textoBuscado);
  }, [textoBuscado]);

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
    },
    {
      id: 2,
      titulo: "Alimentación saludable",
      descripcion:
        "Descubre hábitos de alimentación que pueden favorecer el bienestar y el cuidado de los riñones.",
      categoria: "Nutrición",
      imagen: alimentacion,
    },
    {
      id: 3,
      titulo: "Prevención renal",
      descripcion:
        "Identifica hábitos cotidianos que ayudan a prevenir complicaciones relacionadas con la salud renal.",
      categoria: "Bienestar",
      imagen: prevencion,
    },
    {
      id: 4,
      titulo: "Uso responsable de suplementos",
      descripcion:
        "Consulta recomendaciones importantes antes de incorporar suplementos a tu alimentación diaria.",
      categoria: "Suplementos",
      imagen: suplementos,
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
            onChange={(e) => setBusqueda(e.target.value)}
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
            />
          ))}
        </div>
      ) : (
        <div className="articles-empty">
          <h2>No se encontraron artículos</h2>
          <p>Prueba con otra palabra o selecciona una categoría diferente.</p>
        </div>
      )}
    </section>
  );
}

export default Articles;