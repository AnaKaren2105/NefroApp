import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Farmacias Nefrópolis</h3>
        <p>Tu salud renal es nuestra prioridad.</p>
      </div>

      <div className="footer-info">
        <p>📞 (33) 0000 0000</p>
        <p>📧 contacto@nefropolis.com</p>
        <p>📍 Guadalajara, Jalisco</p>
      </div>

      <p className="footer-copy">
        © 2026 Farmacias Nefrópolis. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;