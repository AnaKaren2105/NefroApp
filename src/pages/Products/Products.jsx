import { useState } from "react";
import ProductCard from "../../components/ui/ProductCard";
import "./Products.css";

function Products() {
  const [categoria, setCategoria] = useState("Todos");

  const productos = [
    {
      nombre: "Suplemento renal NF-1",
      descripcion: "Apoyo nutricional para el bienestar renal diario.",
      precio: "250",
      categoria: "Suplementos",
    },
    {
      nombre: "Vitaminas renales",
      descripcion: "Complemento para una alimentación equilibrada.",
      precio: "180",
      categoria: "Vitaminas",
    },
    {
      nombre: "Kit de cuidado renal",
      descripcion: "Productos esenciales para el cuidado personal.",
      precio: "320",
      categoria: "Cuidado renal",
    },
    {
      nombre: "Pastillero organizador",
      descripcion: "Accesorio práctico para organizar suplementos diarios.",
      precio: "90",
      categoria: "Accesorios",
    },
  ];

  const productosFiltrados = productos.filter((producto) => {
    return categoria === "Todos" || producto.categoria === categoria;
  });

  return (
    <section className="products-page">
      <h1>Productos</h1>

      <p className="products-description">
        Productos especializados para el cuidado de la salud renal.
      </p>

      <div className="products-categories">
        {["Todos", "Suplementos", "Vitaminas", "Cuidado renal", "Accesorios"].map(
          (item) => (
            <button
              key={item}
              className={categoria === item ? "active" : ""}
              onClick={() => setCategoria(item)}
            >
              {item}
            </button>
          )
        )}
      </div>

      <div className="products-grid">
        {productosFiltrados.map((producto, index) => (
          <ProductCard
            key={index}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;