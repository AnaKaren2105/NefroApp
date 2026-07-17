import "./ArticleCard.css";

function ArticleCard({ imagen, titulo, descripcion, onLeerMas }) {
  return (
    <div className="article-card">
      <div className="article-image">
        <img src={imagen} alt={titulo} />
      </div>

      <h3>{titulo}</h3>

      <p>{descripcion}</p>

      <button type="button" onClick={onLeerMas}>
        Leer más
      </button>
    </div>
  );
}

export default ArticleCard;