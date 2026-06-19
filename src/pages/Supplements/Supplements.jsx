import ProductCard from "../../components/ui/ProductCard";
import "./Supplements.css";

function Supplements() {
  return (
    <section className="supplements-page">
      <h1>Suplementos</h1>

      <p className="supplements-description">
        Suplementos especializados para apoyar el bienestar y la salud renal.
      </p>

      <div className="supplements-grid">
        <ProductCard
          nombre="Omega renal"
          descripcion="Apoyo nutricional para el cuidado diario."
          precio="210"
        />

        <ProductCard
          nombre="Multivitamínico"
          descripcion="Vitaminas y minerales para complementar tu alimentación."
          precio="190"
        />

        <ProductCard
          nombre="Proteína especializada"
          descripcion="Suplemento formulado para necesidades específicas."
          precio="350"
        />
      </div>
    </section>
  );
}

export default Supplements;