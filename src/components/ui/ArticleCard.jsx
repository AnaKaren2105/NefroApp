import "./ArticleCard.css";

function ArticleCard({ imagen, titulo, descripcion }) {
  return (
    <div className="article-card">

      <div className="article-image">
        <img src={imagen} alt={titulo} />
      </div>

      <h3>{titulo}</h3>

      <p>{descripcion}</p>

      <button>Leer más</button>

    </div>
  );
}

export default ArticleCard;