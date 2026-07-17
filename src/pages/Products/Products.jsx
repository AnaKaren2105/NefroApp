import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ui/ProductCard";
import bannerProductos from "../../assets/banner_productos.jpeg";
import "./Products.css";

function Products() {
  const [categoria, setCategoria] = useState("Todos");

  const productos = [
    {
      nombre: "Rensensitive HP",
      descripcion:
        "Suplemento nutricional especializado para personas con necesidades renales.",
      categoria: "Renal",
    },
    {
      nombre: "Zenbiotico RNL",
      descripcion:
        "Probiótico formulado para contribuir al bienestar digestivo.",
      categoria: "Bienestar",
    },
    {
      nombre: "Rensensitive LP",
      descripcion:
        "Alimento especializado para complementar el cuidado nutricional renal.",
      categoria: "Renal",
    },
    {
      nombre: "Bebida de arroz",
      descripcion:
        "Alternativa alimenticia para complementar una dieta especializada.",
      categoria: "Alimentos",
    },
    {
      nombre: "Nepro HP",
      descripcion:
        "Fórmula nutricional diseñada para requerimientos específicos.",
      categoria: "Renal",
    },
    {
      nombre: "Suplemento nutricional",
      descripcion:
        "Producto especializado para apoyar el cuidado de la salud y el bienestar.",
      categoria: "Bienestar",
    },
  ];

  const categorias = ["Todos", "Renal", "Alimentos", "Bienestar"];

  const productosFiltrados = productos.filter((producto) => {
    return categoria === "Todos" || producto.categoria === categoria;
  });

  return (
    <section className="products-page">
      <div
        className="products-hero"
        style={{ backgroundImage: `url(${bannerProductos})` }}
      >
        <div className="products-overlay">
          <div className="products-hero-content">
            <h1>Productos especializados</h1>

            <p>
              Encuentra suplementos, alimentos y productos especializados para
              el cuidado de la salud renal.
            </p>

            <a href="#productos" className="products-btn">
              Ver productos destacados
            </a>
          </div>
        </div>
      </div>

      <div className="products-intro">
        <h2>Nuestros productos</h2>

        <p>
          Contamos con una amplia variedad de productos especializados para
          brindar acompañamiento a personas con enfermedad renal y promover una
          mejor calidad de vida.
        </p>
      </div>

      <div className="products-categories">
        {categorias.map((item) => (
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

      <div id="productos" className="products-grid">
        {productosFiltrados.map((producto) => (
          <ProductCard
            key={producto.nombre}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            categoria={producto.categoria}
          />
        ))}
      </div>

      <div className="products-footer">
        <h2>¿Necesitas orientación?</h2>

        <p>
          Nuestro equipo puede ayudarte a encontrar los productos
          especializados que mejor se adapten a tus necesidades.
        </p>

        <Link to="/contacto">Contáctanos</Link>
      </div>
    </section>
  );
}

export default Products;