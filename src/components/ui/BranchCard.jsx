import { useState } from "react";
import "./BranchCard.css";

function BranchCard({
  imagen,
  nombre,
  ciudad,
  direccion,
  telefono,
  whatsapp,
  correo,
  horario,
}) {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const enlaceMapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    direccion
  )}`;

  return (
    <article className="branch-card">
      <div className="branch-image">
        <img src={imagen} alt={nombre} />
      </div>

      <div className="branch-content">
        <span className="branch-location">📍 {ciudad}</span>

        <h3>{nombre}</h3>

        <div className="branch-contact">
          <p>📞 {telefono}</p>
          <p>💬 {whatsapp}</p>
        </div>

        {mostrarDetalles && (
          <div className="branch-details">
            <div className="branch-detail">
              <strong>Dirección</strong>
              <p>{direccion}</p>
            </div>

            <div className="branch-detail">
              <strong>Correo</strong>
              <p>{correo}</p>
            </div>

            <div className="branch-detail">
              <strong>Horario</strong>
              {horario.map((linea, index) => (
                <p key={index}>{linea}</p>
              ))}
            </div>

            <a
  className="branch-map-link"
  href={enlaceMapa}
  target="_blank"
  rel="noopener noreferrer"
>
  📍 Ver en mapa
</a>
          </div>
        )}

        <button
          type="button"
          onClick={() => setMostrarDetalles(!mostrarDetalles)}
        >
          {mostrarDetalles ? "Ocultar sucursal" : "Ver sucursal"}
        </button>
      </div>
    </article>
  );
}

export default BranchCard;