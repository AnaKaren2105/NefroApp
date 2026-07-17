import "./ProductCard.css";

function ProductCard({ nombre, descripcion, categoria }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <span>🧴</span>
      </div>

      <h3>{nombre}</h3>

      <p>{descripcion}</p>

      <span className="product-category">
        {categoria}
      </span>

      <button>
        Ver información
      </button>

    </div>
  );
}

export default ProductCard;