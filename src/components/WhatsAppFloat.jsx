import { useEffect, useRef, useState } from "react";
import { FaChevronUp, FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppFloat.module.css";

const WHATSAPP_NUMBER = "524493465877";

const contactOptions = [
  {
    id: "quote",
    label: "Cotizar proyecto",
    message:
      "Hola Gerardo, quiero cotizar un proyecto.\n\nNombre:\nEmpresa o negocio:\nTipo de proyecto (web, app, IA, automatizacion):\nObjetivo principal:\nPresupuesto estimado:\nFecha objetivo:",
  },
  {
    id: "meeting",
    label: "Agendar reunion",
    message:
      "Hola Gerardo, me gustaria agendar una reunion para hablar de un proyecto.\n\nNombre:\nEmpresa o negocio:\nTema principal:\nHorario preferido:\nModalidad (virtual/presencial):",
  },
  {
    id: "support",
    label: "Implementacion IA",
    message:
      "Hola Gerardo, me interesa implementar IA en mi negocio.\n\nNombre:\nEmpresa o negocio:\nProceso a automatizar:\nHerramientas actuales:\nResultado esperado:",
  },
  {
    id: "collab",
    label: "Colaboracion freelance",
    message:
      "Hola Gerardo, me interesa colaborar contigo en modalidad freelance.\n\nNombre:\nEmpresa o negocio:\nRol o necesidad:\nDuracion estimada:\nFecha de inicio:",
  },
];

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={containerRef}>
      {isOpen && (
        <div className={styles.menu} role="menu" aria-label="Opciones de contacto">
          <p className={styles.menuTitle}>Contactar por WhatsApp</p>
          {contactOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              className={styles.menuItem}
              onClick={() => openWhatsApp(option.message)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-label="Abrir opciones de contacto por WhatsApp"
      >
        <FaWhatsapp className={styles.triggerIcon} />
        <span className={styles.triggerText}>Contactar</span>
        <FaChevronUp
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
        />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
