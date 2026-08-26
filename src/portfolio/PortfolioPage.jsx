import { useEffect, useRef, useState } from "react";
// JSX member expressions are not counted as variable usage by the current lint rule.
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { projects, experience, personalInfo } from "../data/portfolio";
import resumeEs from "../documents/Gerardo Esparza - CV Spanish.pdf";
import portfolioLogo from "../Logo GE Software & Automatizacion AI White Square.png";
import styles from "./PortfolioPage.module.css";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const projectNarrative = {
  1: {
    context: "Operación industrial",
    headline: "Una operación crítica, reunida en un solo sistema.",
    summary:
      "Darpha Maintenance App digitaliza inspecciones, mantenimiento preventivo, reportes y seguimiento operativo para sistemas de protección contra incendios.",
    role: "Arquitectura, producto y desarrollo full stack",
    proof: ["PWA responsive", "RBAC y firmas digitales", "AWS S3 y Railway", "Notificaciones y analítica"],
  },
  2: {
    context: "Fintech e IA",
    headline: "Información financiera que se convierte en decisiones.",
    summary:
      "KontrolAI organiza cuentas, transacciones, presupuestos y documentos bancarios con automatización y asistencia contextual.",
    role: "Producto, arquitectura e integración de IA",
    proof: ["Extracción de PDF", "Asistente financiero", "Proyecciones", "Google OAuth"],
    stack: ["React", "Node.js", "PostgreSQL", "Prisma", "OpenAI API", "TanStack Query"],
  },
  3: {
    context: "IoT y visión computacional",
    headline: "Software, nube y hardware trabajando como un sistema.",
    summary:
      "AccessAI conecta reconocimiento facial, Raspberry Pi, sensores y control remoto para gestionar accesos en tiempo real.",
    role: "Arquitectura integral e integración IoT",
    proof: ["Azure Face API", "Azure IoT Hub", "Raspberry Pi", "Control en tiempo real"],
    stack: ["React", "Node.js", "Azure Face API", "Azure IoT Hub", "Raspberry Pi", "Azure SQL"],
  },
  4: {
    context: "IA conversacional",
    headline: "Conversaciones automáticas con control humano cuando importa.",
    summary:
      "Una plataforma multi-negocio para operar conversaciones, contexto, citas y asistencia mediante IA desde un panel central.",
    role: "Arquitectura, backend en tiempo real e integración de IA",
    proof: ["Gemini 2.0", "Embeddings", "Socket.IO", "Intervención humana"],
    stack: ["Node.js", "Gemini 2.0", "PostgreSQL", "pgvector", "Socket.IO", "WhatsApp API"],
  },
  5: {
    context: "Producto comercial",
    headline: "De explorar un servicio a reservarlo en el mismo recorrido.",
    summary:
      "Una experiencia web para presentar servicios, cotizar por vehículo y convertir el interés en reservaciones o conversaciones por WhatsApp.",
    role: "Experiencia, desarrollo web y automatización",
    proof: ["Astro y React", "Cotización asistida", "Reservaciones", "WhatsApp"],
    stack: ["Astro", "React", "Tailwind CSS", "Agentes de IA", "WhatsApp Business", "Vercel"],
  },
};

const promoImages = {
  2: "/projects/kontrolai/PromoImage.png",
  3: "/projects/accessai/PromoImage.png",
  4: "/projects/chatbot/PromoImage.png",
  5: "/projects/cleancarclub/PromoImage.png",
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function Navigation({ onOpenResume }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["Trabajo", "#trabajo"],
    ["Perfil", "#perfil"],
    ["Experiencia", "#experiencia"],
    ["Contacto", "#contacto"],
  ];

  return (
    <header className={styles.header}>
      <a className={styles.wordmark} href="#inicio" aria-label="Gerardo Esparza Software y Automatización IA, inicio">
        <img
          src={portfolioLogo}
          alt=""
        />
      </a>
      <button className={styles.menuButton} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation">
        {open ? "Cerrar" : "Menú"}
      </button>
      <nav id="main-navigation" className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Navegación principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <button className={styles.mobileResume} type="button" onClick={() => { setOpen(false); onOpenResume(); }}>Ver CV</button>
      </nav>
      <button className={styles.navCta} type="button" onClick={onOpenResume}>Ver CV</button>
    </header>
  );
}

function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <motion.div className={styles.heroTitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
        <p className={styles.availability}><span /> Disponible para oportunidades y proyectos</p>
        <h1>Convierto problemas complejos en sistemas que funcionan.</h1>
      </motion.div>
      <motion.div className={styles.heroBrief} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
        <p>Ingeniero de software full stack especializado en producto, inteligencia artificial, cloud e IoT.</p>
        <div className={styles.heroActions}>
          <a className={styles.primaryAction} href="#trabajo">Explorar proyectos <ArrowIcon /></a>
          <a className={styles.secondaryAction} href="#contacto">Iniciar conversación</a>
        </div>
      </motion.div>
      <div className={styles.heroFoot}>
        <span>Aguascalientes, México</span>
        <span>React · Node.js · PostgreSQL · Azure</span>
      </div>
    </section>
  );
}

function DarphaCase() {
  const tech = ["React", "Node.js", "Express", "PostgreSQL", "Sequelize", "AWS S3", "Socket.IO", "IA aplicada"];
  return (
    <section className={styles.darpha} id="trabajo">
      <p className={styles.context}>Caso principal · Sistema empresarial</p>
      <motion.div className={styles.caseIntro} {...reveal}>
        <div>
          <h2>Darpha Maintenance App</h2>
        </div>
        <div className={styles.caseSummary}>
          <p>Una plataforma robusta para digitalizar la inspección, el mantenimiento y la trazabilidad de sistemas de protección contra incendios.</p>
          <span>Arquitectura y desarrollo integral · 2024 a presente</span>
        </div>
      </motion.div>

      <motion.figure className={styles.darphaCover} {...reveal}>
        <img src="/projects/darpha/TabletImage.png?v=20260826" alt="Darpha Maintenance App presentada en una tablet sobre una superficie industrial" />
        <figcaption>Supervisión operativa desde una interfaz adaptada al trabajo diario.</figcaption>
      </motion.figure>

      <div className={styles.caseFlow}>
        <motion.article {...reveal}>
          <p className={styles.context}>El problema</p>
          <h3>Procesos críticos distribuidos entre formatos, archivos y seguimiento manual.</h3>
        </motion.article>
        <motion.article {...reveal}>
          <p className={styles.context}>La respuesta</p>
          <p>Diseñé una arquitectura full stack que reúne reportes digitales, inventario, programación preventiva, certificaciones, evidencias y comunicación operativa.</p>
        </motion.article>
        <motion.article {...reveal}>
          <p className={styles.context}>El alcance</p>
          <ul>
            <li>Control de acceso basado en roles</li>
            <li>Firmas digitales y códigos QR</li>
            <li>Archivos seguros en AWS S3</li>
            <li>PWA responsive y modo offline</li>
          </ul>
        </motion.article>
        <motion.article {...reveal}>
          <p className={styles.context}>Mi responsabilidad</p>
          <p>Levantamiento con gerencia y operaciones, diseño de datos, API REST, interfaz, despliegue, soporte y capacitación a usuarios.</p>
        </motion.article>
      </div>

      <div className={styles.techLine} aria-label="Tecnologías utilizadas">
        {tech.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function ProjectRow({ project, index }) {
  const narrative = projectNarrative[project.id];
  if (!narrative) return null;
  const image = promoImages[project.id];
  return (
    <motion.article className={`${styles.projectRow} ${index % 2 ? styles.projectReverse : ""}`} {...reveal}>
      <div className={styles.projectCopy}>
        <p className={styles.context}>{narrative.context}</p>
        <h3>{narrative.headline}</h3>
        <p>{narrative.summary}</p>
        <dl><dt>Responsabilidad</dt><dd>{narrative.role}</dd></dl>
        <ul className={styles.proofList}>{narrative.proof.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className={styles.projectStack} aria-label={`Tecnologías principales de ${project.title}`}>
          {narrative.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
        {project.link && <a className={styles.textLink} href={project.link} target="_blank" rel="noreferrer">Ver producto <ArrowIcon /></a>}
      </div>
      <figure className={styles.projectVisual}><img src={image} alt={`Presentación promocional de ${project.title}`} /><figcaption>{project.title} · {project.year}</figcaption></figure>
    </motion.article>
  );
}

function Profile() {
  const capabilities = [
    ["Productos web completos", "Interfaces, APIs, datos, autenticación, despliegue y operación."],
    ["IA aplicada", "Agentes, modelos generativos, embeddings y automatización dentro de productos reales."],
    ["Cloud e integraciones", "Servicios administrados, almacenamiento, comunicación en tiempo real e IoT."],
  ];
  return (
    <section className={styles.profile} id="perfil">
      <motion.div className={styles.profileStatement} {...reveal}>
        <h2>Entiendo la operación antes de elegir la tecnología.</h2>
      </motion.div>
      <motion.div className={styles.profileBody} {...reveal}>
        <p>Trabajo de extremo a extremo: convierto requisitos en una arquitectura clara, construyo entregas verificables y acompaño el sistema hasta producción.</p>
        <p>Me interesan los proyectos donde el software debe conectar procesos, personas y datos, no únicamente mostrar una interfaz.</p>
      </motion.div>
      <div className={styles.capabilities}>
        {capabilities.map(([title, copy]) => <motion.article key={title} {...reveal}><h3>{title}</h3><p>{copy}</p></motion.article>)}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className={styles.experience} id="experiencia">
      <motion.div className={styles.sectionHeading} {...reveal}>
        <h2>Experiencia construyendo y operando software.</h2>
      </motion.div>
      <div className={styles.roles}>
        {experience.map((role) => (
          <motion.article key={role.id} {...reveal}>
            <div><h3>{role.position}</h3><p>{role.company}</p></div>
            <p>{role.description}</p>
            <span>{role.period}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact({ onOpenResume }) {
  const whatsapp = "https://wa.me/524493465877?text=" + encodeURIComponent("Hola Gerardo, vi tu portafolio y quiero conversar sobre una oportunidad o proyecto.");
  return (
    <section className={styles.contact} id="contacto">
      <motion.div {...reveal}>
        <h2>Construyamos algo que tenga sentido.</h2>
      </motion.div>
      <div className={styles.contactRoutes}>
        <motion.article {...reveal}>
          <span>Para equipos</span><h3>Estoy abierto a oportunidades profesionales.</h3>
          <div><button className={styles.primaryAction} type="button" onClick={onOpenResume}>Ver currículum <ArrowIcon /></button></div>
        </motion.article>
        <motion.article {...reveal}>
          <span>Para proyectos</span><h3>Cuéntame qué necesitas resolver.</h3>
          <div><a className={styles.primaryAction} href={`mailto:${personalInfo.email}`}>Enviar correo <ArrowIcon /></a><a className={styles.textLink} href={whatsapp} target="_blank" rel="noreferrer">Escribir por WhatsApp</a></div>
        </motion.article>
      </div>
      <footer className={styles.footer}>
        <span>Gerardo Esparza · {new Date().getFullYear()}</span>
        <div><a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a><a href={`mailto:${personalInfo.email}`}>Email</a></div>
      </footer>
    </section>
  );
}

function ResumeModal({ open, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.modalBackdrop} role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className={styles.resumeModal} role="dialog" aria-modal="true" aria-labelledby="resume-title">
        <header className={styles.modalHeader}>
          <div>
            <p>Currículum · 2026</p>
            <h2 id="resume-title">Gerardo Esparza</h2>
          </div>
          <button ref={closeButtonRef} className={styles.modalClose} type="button" onClick={onClose} aria-label="Cerrar currículum">Cerrar</button>
        </header>

        <div className={styles.resumeIntro}>
          <div><strong>Ingeniero en Sistemas Computacionales</strong><span>Aguascalientes, México</span></div>
          <div><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a><a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
        </div>

        <div className={styles.resumeBody}>
          <section>
            <h3>Perfil profesional</h3>
            <p>Ingeniero de software full stack enfocado en automatización de procesos e integración de inteligencia artificial. Experiencia desarrollando agentes IA, chatbots y sistemas automatizados utilizando OpenAI, Claude y tecnologías web modernas para optimizar operaciones y mejorar flujos de trabajo empresariales.</p>
          </section>

          <section>
            <h3>Experiencia laboral</h3>
            <article className={styles.resumeRole}>
              <div><h4>Desarrollador Full Stack y Automatización IA</h4><span>Proyectos freelance · 2022 a presente</span></div>
              <ul>
                <li><strong>Automatización de cotizaciones con IA:</strong> diseño de un sistema que interpreta solicitudes personalizadas, reduce tiempos de respuesta y automatiza el seguimiento.</li>
                <li><strong>Chatbot de reservas por WhatsApp:</strong> agente capaz de agendar, modificar y confirmar citas, validando disponibilidad y reduciendo carga administrativa.</li>
                <li><strong>Gestión de finanzas con chatbot:</strong> aplicación para registrar ingresos y gastos, consultar balances y atender preguntas mediante lenguaje natural.</li>
              </ul>
            </article>
            <article className={styles.resumeRole}>
              <div><h4>Ingeniero de Software Full Stack</h4><span>Darpha Fire Solutions · 2024 a presente</span></div>
              <ul>
                <li>Desarrollo y mantenimiento de una plataforma digital interna.</li>
                <li>Frontend y backend con React, Node.js y PostgreSQL.</li>
                <li>APIs REST y conexión entre módulos del sistema.</li>
                <li>Despliegues cloud y administración básica de infraestructura.</li>
                <li>Colaboración con diferentes áreas para digitalizar procesos operativos.</li>
              </ul>
            </article>
          </section>

          <div className={styles.resumeColumns}>
            <section>
              <h3>Habilidades clave</h3>
              <ul>
                <li>Pensamiento orientado a solución de problemas</li>
                <li>Comunicación efectiva con equipos técnicos y no técnicos</li>
                <li>Autonomía y ejecución end-to-end</li>
                <li>Adaptabilidad y aprendizaje continuo</li>
                <li>Enfoque en impacto y mejora de procesos</li>
              </ul>
            </section>
            <section>
              <h3>Educación e idiomas</h3>
              <p><strong>Ingeniería en Sistemas Computacionales</strong><br />Universidad Politécnica de Aguascalientes, 2022 a 2026.</p>
              <p>Español nativo · Inglés</p>
            </section>
          </div>
        </div>

        <footer className={styles.modalFooter}>
          <span>Versión resumida para lectura rápida.</span>
          <div><a className={styles.secondaryAction} href={resumeEs} download>Descargar PDF</a></div>
        </footer>
      </section>
    </div>
  );
}

export default function PortfolioPage() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const supporting = projects.filter((project) => [2, 3, 4, 5].includes(project.id));
  return <><Navigation onOpenResume={() => setResumeOpen(true)} /><main><Hero /><DarphaCase /><section className={styles.supporting}><div className={styles.sectionHeading}><h2>La misma disciplina, aplicada a otros contextos.</h2></div>{supporting.map((project, index) => <ProjectRow key={project.id} project={project} index={index} />)}</section><Profile /><Experience /><Contact onOpenResume={() => setResumeOpen(true)} /></main><ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} /></>;
}
