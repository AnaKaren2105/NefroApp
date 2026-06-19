import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <h1>Contacto</h1>

      <p className="contact-description">
        Encuentra nuestras sucursales, horarios y medios de atención.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>📍 Sucursal Centro</h3>
          <p>Av. Principal #123, Guadalajara, Jalisco.</p>
          <p><strong>Tel:</strong> (33) 1234 5678</p>
          <p><strong>Horario:</strong> Lun - Vie, 8:00 AM - 8:00 PM</p>
        </div>

        <div className="contact-card">
          <h3>📍 Sucursal Norte</h3>
          <p>Calle Salud Renal #45, Zapopan, Jalisco.</p>
          <p><strong>Tel:</strong> (33) 8765 4321</p>
          <p><strong>Horario:</strong> Lun - Sáb, 9:00 AM - 7:00 PM</p>
        </div>

        <div className="contact-card">
          <h3>💬 Atención</h3>
          <p><strong>WhatsApp:</strong> (33) 1111 2222</p>
          <p><strong>Correo:</strong> contacto@nefropolis.com</p>
          <p>Asesoría especializada en productos para salud renal.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;