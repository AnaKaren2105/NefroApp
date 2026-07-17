import { useState } from "react";
import BranchCard from "../../components/ui/BranchCard";
import sucursal from "../../assets/sucursales_nefropolis.jpeg";
import "./Contact.css";

function Contact() {
  const [busqueda, setBusqueda] = useState("");

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [errorFormulario, setErrorFormulario] = useState("");

  const horarioRegular = [
    "Lunes a Viernes",
    "9:30 am - 2 pm, 2:30 pm - 6 pm",
    "Sábado",
    "10:00 am - 2:30 pm",
  ];

  const sucursales = [
    {
      nombre: "Sucursal Guadalajara",
      ciudad: "Guadalajara, Jalisco",
      direccion:
        "C. Miguel Lerdo de Tejada #2218-B, Col. Lafayette, 44150 Guadalajara, Jalisco",
      telefono: "33 3616 5409",
      whatsapp: "33 2339 2966",
      correo: "guadalajara@nefropolis.com",
      horario: horarioRegular,
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Roma",
      ciudad: "Ciudad de México",
      direccion:
        "C. Manzanillo 197, Col. Roma Sur, Cuauhtémoc, 06760 Cuauhtémoc, Ciudad de México",
      telefono: "55 6387 9987",
      whatsapp: "33 2339 3005",
      correo: "roma@nefropolis.com",
      horario: horarioRegular,
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Iztapalapa",
      ciudad: "Ciudad de México",
      direccion:
        "Av. Tláhuac 19, Col. Santa Isabel Industrial, 09820 Iztapalapa, Ciudad de México",
      telefono: "55 9046 2288",
      whatsapp: "33 2339 2969",
      correo: "iztapalapa@nefropolis.com",
      horario: horarioRegular,
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Tlalnepantla",
      ciudad: "Tlalnepantla, Estado de México",
      direccion:
        "Av. Gustavo Baz #3315 Local C-17, Col. Plaza Olímpus, 54000 Tlalnepantla de Baz, México",
      telefono: "55 7601 1937",
      whatsapp: "33 2339 2972",
      correo: "tlalnepantla@nefropolis.com",
      horario: horarioRegular,
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Valle de Aragón",
      ciudad: "Nezahualcóyotl, Estado de México",
      direccion:
        "Av. Central 854, Col. Valle de Aragón 1era sección, 57100 Nezahualcóyotl, México",
      telefono: "55 8948 9747",
      whatsapp: "33 3559 1185",
      correo: "valledearagon@nefropolis.com",
      horario: horarioRegular,
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Monterrey",
      ciudad: "Monterrey, Nuevo León",
      direccion:
        "Belisario Domínguez #2470 Local-3 Plaza Semillero Obispado, Col. Obispado, 64060 Monterrey, Nuevo León",
      telefono: "81 4769 3971",
      whatsapp: "33 2358 4170",
      correo: "monterrey@nefropolis.com",
      horario: [
        "Lunes a Viernes",
        "8:00 am - 8:00 pm",
        "Sábado",
        "8:00 am - 2:00 pm",
      ],
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Puebla",
      ciudad: "Puebla, Puebla",
      direccion:
        "Av. 31 Oriente #2 Local - 1 Esquina con C. 16 de Septiembre, Col. El Carmen, 72530 Puebla, Puebla",
      telefono: "22 2243 4765",
      whatsapp: "33 2339 2975",
      correo: "puebla@nefropolis.com",
      horario: horarioRegular,
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Tlaxcala",
      ciudad: "Tlaxcala, Tlaxcala",
      direccion:
        "C. Miguel Hidalgo y Costilla #22-Local 1, Col. Tlaxcala Centro, 90000 Tlaxcala, Tlaxcala",
      telefono: "24 6466 8497",
      whatsapp: "33 2339 2982",
      correo: "tlaxcala@nefropolis.com",
      horario: horarioRegular,
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Tuxtla",
      ciudad: "Tuxtla Gutiérrez, Chiapas",
      direccion:
        "Av. 1a. Sur Pte #519-A, Col. Tuxtla Gutiérrez Centro, 29000 Tuxtla Gutiérrez, Chiapas",
      telefono: "96 1613 5691",
      whatsapp: "33 2339 2983",
      correo: "tuxtla@nefropolis.com",
      horario: horarioRegular,
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Oaxaca",
      ciudad: "Oaxaca de Juárez, Oaxaca",
      direccion:
        "Netzahualcóyotl #202-Local 1, Col. Reforma, 68050 Oaxaca de Juárez, Oaxaca",
      telefono: "95 1515 3668",
      whatsapp: "33 2339 4156",
      correo: "oaxaca@nefropolis.com",
      horario: horarioRegular,
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Querétaro",
      ciudad: "Querétaro, Querétaro",
      direccion:
        "Av. Tecnológico #35 Plaza Santa Fe Local 1-A, Col. Centro, 76000 Querétaro, Querétaro",
      telefono: "44 2241 5329",
      whatsapp: "33 1944 2736",
      correo: "queretaro@nefropolis.com",
      horario: [
        "Lunes a Viernes",
        "8:00 am - 8:00 pm",
        "Sábado",
        "8:00 am - 2:00 pm",
      ],
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Hermosillo",
      ciudad: "Hermosillo, Sonora",
      direccion:
        "Blvd. Luis Encinas J. #23-Interior 2, Col. Hermosillo Centro, 83000 Hermosillo, Sonora",
      telefono: "66 2381 8690",
      whatsapp: "33 2358 7152",
      correo: "hermosillo@nefropolis.com",
      horario: horarioRegular,
      imagen: sucursal,
    },
    {
      nombre: "Sucursal Lite Toluca",
      ciudad: "Metepec, Estado de México",
      direccion:
        "José María Morelos y Pavón #23, Local Planta Baja, Col. Pilares, 52179 Metepec, México",
      telefono: "72 2944 2326",
      whatsapp: "23 7119 5208",
      correo: "toluca@nefropolis.com",
      horario: horarioRegular,
      imagen: sucursal,
    },
  ];

  const normalizar = (texto) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const sucursalesFiltradas = sucursales.filter((sucursalActual) => {
    const texto = normalizar(busqueda.trim());

    return (
      normalizar(sucursalActual.nombre).includes(texto) ||
      normalizar(sucursalActual.ciudad).includes(texto) ||
      normalizar(sucursalActual.direccion).includes(texto)
    );
  });

  const enviarFormulario = () => {
    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      asunto.trim() === "" ||
      mensaje.trim() === ""
    ) {
      setMensajeEnviado(false);
      setErrorFormulario("Por favor completa todos los campos.");
      return;
    }

    if (!correo.includes("@")) {
      setMensajeEnviado(false);
      setErrorFormulario("Ingresa un correo electrónico válido.");
      return;
    }

    setErrorFormulario("");
    setMensajeEnviado(true);

    setNombre("");
    setCorreo("");
    setAsunto("");
    setMensaje("");

    setTimeout(() => {
      setMensajeEnviado(false);
    }, 4000);
  };

  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>Contacto</h1>

        <p>
          Contamos con 13 sucursales. Encuentra la más cercana y consulta
          nuestros datos oficiales de atención.
        </p>
      </div>

      <div className="contact-search">
        <input
          type="text"
          placeholder="Buscar sucursal por nombre, ciudad o estado..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {sucursalesFiltradas.length > 0 ? (
        <div className="branches-grid">
          {sucursalesFiltradas.map((sucursalActual) => (
            <BranchCard
              key={sucursalActual.nombre}
              imagen={sucursalActual.imagen}
              nombre={sucursalActual.nombre}
              ciudad={sucursalActual.ciudad}
              direccion={sucursalActual.direccion}
              telefono={sucursalActual.telefono}
              whatsapp={sucursalActual.whatsapp}
              correo={sucursalActual.correo}
              horario={sucursalActual.horario}
            />
          ))}

          <div className="contact-form">
            <h2>Envíanos un mensaje</h2>

            <p>
              Completa el formulario y nuestro equipo se pondrá en contacto
              contigo.
            </p>

            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                setErrorFormulario("");
              }}
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
                setErrorFormulario("");
              }}
            />

            <input
              type="text"
              placeholder="Asunto"
              value={asunto}
              onChange={(e) => {
                setAsunto(e.target.value);
                setErrorFormulario("");
              }}
            />

            <textarea
              rows="5"
              placeholder="Escribe tu mensaje..."
              value={mensaje}
              onChange={(e) => {
                setMensaje(e.target.value);
                setErrorFormulario("");
              }}
            ></textarea>

            <button type="button" onClick={enviarFormulario}>
              Enviar mensaje
            </button>

            {errorFormulario && (
              <p className="form-error">{errorFormulario}</p>
            )}

            {mensajeEnviado && (
              <p className="success-message">
                ✅ ¡Gracias por contactarnos! Hemos recibido tu mensaje.
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="contact-empty">
          <h2>No se encontraron sucursales</h2>
          <p>Prueba con otro nombre, ciudad o estado.</p>
        </div>
      )}
    </section>
  );
}

export default Contact;