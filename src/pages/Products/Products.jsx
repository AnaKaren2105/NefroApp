import ProductCard from "../../components/ui/ProductCard";
import "./Products.css";

function Products() {
  return (
    <section className="products-page">
      <h1>Productos</h1>
      <p className="products-description">
        Productos especializados para el cuidado de la salud renal.
      </p>

      <div className="products-grid">
        <ProductCard
          nombre="Suplemento renal"
          descripcion="Apoyo nutricional para el bienestar diario."
          precio="250"
        />

        <ProductCard
          nombre="Vitaminas especiales"
          descripcion="Complemento para una alimentación equilibrada."
          precio="180"
        />

        <ProductCard
          nombre="Kit de cuidado"
          descripcion="Productos esenciales para el cuidado personal."
          precio="320"
        />
      </div>
    </section>
  );
}

export default Products;