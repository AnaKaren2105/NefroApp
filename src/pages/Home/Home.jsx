import "./Home.css";
import FeatureCard from "../../components/ui/FeatureCard";
import rinonBueno from "../../assets/logo_inicio.png";
import informacion from "../../assets/informacion.png";
import productos from "../../assets/productos.png";
import consejos from "../../assets/consejos.png";
import envios from "../../assets/envios.png";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Tu salud renal es nuestra prioridad</h1>

          <p>
            Información confiable, productos especializados y consejos para una
            mejor calidad de vida.
          </p>

          <button>Conoce más</button>
        </div>

        <div className="kidney-shape">
          <img src={rinonBueno} alt="Riñón" />
        </div>
      </div>

      <div className="features">
        <FeatureCard
          imagen={informacion}
          titulo="Información confiable"
          descripcion="Artículos y guías respaldadas por especialistas."
        />

        <FeatureCard
          imagen={productos}
          titulo="Productos especializados"
          descripcion="Suplementos y productos para el cuidado renal."
        />

        <FeatureCard
          imagen={consejos}
          titulo="Consejos de expertos"
          descripcion="Recomendaciones prácticas para tu bienestar."
        />

        <FeatureCard
          imagen={envios}
          titulo="Envíos seguros"
          descripcion="Recibe tus productos en la puerta de tu hogar."
        />
      </div>
    </section>
  );
}

export default Home;