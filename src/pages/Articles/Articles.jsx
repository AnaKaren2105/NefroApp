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
      titulo: "Importancia de la hidratación",
      descripcion: "Consejos para mantener una correcta salud renal.",
      categoria: "Bienestar",
      imagen: hidratacion,
    },
    {
      titulo: "Alimentación saludable",
      descripcion: "Alimentos recomendados para el cuidado de tus riñones.",
      categoria: "Nutrición",
      imagen: alimentacion,
    },
    {
      titulo: "Prevención renal",
      descripcion: "Hábitos diarios para prevenir enfermedades renales.",
      categoria: "Bienestar",
      imagen: prevencion,
    },
    {
      titulo: "Uso responsable de suplementos",
      descripcion: "Recomendaciones antes de consumir suplementos.",
      categoria: "Suplementos",
      imagen: suplementos,
    },
  ];

  const articulosFiltrados = articulos.filter((articulo) => {
    const texto = normalizar(busqueda);

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
      <h1>Artículos</h1>

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
            className={categoria === item ? "active" : ""}
            onClick={() => setCategoria(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="articles-grid">
        {articulosFiltrados.map((articulo, index) => (
          <ArticleCard
            key={index}
            imagen={articulo.imagen}
            titulo={articulo.titulo}
            descripcion={articulo.descripcion}
          />
        ))}
      </div>
    </section>
  );
}

export default Articles;