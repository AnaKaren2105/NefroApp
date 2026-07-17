import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <section className="footer-column">
          <h3>💬 Atención</h3>

          <div className="footer-action-links">
            <a
              href="https://share.cody.bot/9efbfd9a-1dbd-4ef1-9371-a5955e9ab66e"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-action-button"
            >
              Chat 24/7
            </a>

            <a
              href="https://bookings.cloud.microsoft/book/PamelaRomeroCedeo@nefropolis.com/?ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-action-button"
            >
              Agendar llamada
            </a>
          </div>
        </section>

        <section className="footer-column footer-center">
          <h3>💬 WhatsApp Ventas</h3>

          <p className="footer-sales">
            33 1146 8502
          </p>
        </section>

        <section className="footer-column">
          <h3>Síguenos</h3>

          <div className="footer-socials">

            <a
              href="https://www.facebook.com/nefropolis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24">
                <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1.01.28-1.7 1.75-1.7H17.1V2.42c-.32-.04-1.42-.14-2.7-.14-2.68 0-4.52 1.64-4.52 4.65V9.5H7v3.5h2.88v9h3.62Z"/>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/nefropolis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.76 3.76 0 0 0 4 7.75v8.5A3.76 3.76 0 0 0 7.75 20h8.5A3.76 3.76 0 0 0 20 16.25v-8.5A3.76 3.76 0 0 0 16.25 4h-8.5ZM17.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@nefropolis1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.58 12 3.58 12 3.58s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/nefropolis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M5.34 3.5A2.34 2.34 0 1 1 .66 3.5a2.34 2.34 0 0 1 4.68 0ZM1.05 7h4.58v14H1.05V7Zm7.43 0h4.39v1.91h.06c.61-1.16 2.11-2.39 4.34-2.39 4.64 0 5.5 3.05 5.5 7.02V21h-4.58v-6.61c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.49V21H8.48V7Z"/>
              </svg>
            </a>

          </div>
        </section>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Farmacias Nefrópolis. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;