import "./ProductCard.css";

function ProductCard({ nombre, descripcion, precio }) {
  return (
    <div className="product-card">

      <div className="product-image">
       <span>🧴</span>
       </div>

      <h3>{nombre}</h3>

      <p>{descripcion}</p>

      <span className="price">
        ${precio}
      </span>

      <button>
        Ver más
      </button>

    </div>
  );
}

export default ProductCard;