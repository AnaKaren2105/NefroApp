import "./FeatureCard.css";

function FeatureCard({ imagen, titulo, descripcion }) {
  return (
    <div className="feature-card">
      <div className="feature-image">
        <img src={imagen} alt={titulo} />
      </div>

      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default FeatureCard;