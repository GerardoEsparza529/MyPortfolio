import { useState } from "react";
// JSX member expressions are not counted as variable usage by the current lint rule.
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { projects, experience, personalInfo } from "../data/portfolio";
import resumeEs from "../documents/Gerardo Esparza - CV Spanish.pdf";
import resumeEn from "../documents/Gerardo Esparza - CV English.pdf";
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
  },
  3: {
    context: "IoT y visión computacional",
    headline: "Software, nube y hardware trabajando como un sistema.",
    summary:
      "AccessAI conecta reconocimiento facial, Raspberry Pi, sensores y control remoto para gestionar accesos en tiempo real.",
    role: "Arquitectura integral e integración IoT",
    proof: ["Azure Face API", "Azure IoT Hub", "Raspberry Pi", "Control en tiempo real"],
  },
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Trabajo", "#trabajo"],
    ["Perfil", "#perfil"],
    ["Experiencia", "#experiencia"],
    ["Contacto", "#contacto"],
  ];

  return (
    <header className={styles.header}>
      <a className={styles.wordmark} href="#inicio" aria-label="Gerardo Esparza, inicio">GE<span>.</span></a>
      <button className={styles.menuButton} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation">
        {open ? "Cerrar" : "Menú"}
      </button>
      <nav id="main-navigation" className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Navegación principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className={styles.navCta} href={resumeEs} target="_blank" rel="noreferrer">Descargar CV</a>
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

function DarphaCase({ project }) {
  const tech = [...(project.technologies.frontend || []), ...(project.technologies.backend || [])].slice(0, 8);
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

      <motion.figure className={styles.heroScreenshot} {...reveal}>
        <img src={project.gallery.desktop[0]} alt="Dashboard principal de Darpha Maintenance App en modo oscuro" />
        <figcaption>Supervisión operativa, métricas y pendientes desde una sola vista.</figcaption>
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

      <motion.div className={styles.caseGallery} {...reveal}>
        <figure><img src={project.gallery.desktop[6]} alt="Vista de un reporte en Darpha Maintenance App" /><figcaption>Reportes y evidencia operativa</figcaption></figure>
        <figure><img src={project.gallery.mobile[0]} alt="Dashboard móvil de Darpha Maintenance App" /><figcaption>Operación disponible en campo</figcaption></figure>
      </motion.div>

      <div className={styles.techLine} aria-label="Tecnologías utilizadas">
        {tech.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function ProjectRow({ project, index }) {
  const narrative = projectNarrative[project.id];
  if (!narrative) return null;
  const image = project.gallery?.desktop?.[0];
  return (
    <motion.article className={`${styles.projectRow} ${index % 2 ? styles.projectReverse : ""}`} {...reveal}>
      <div className={styles.projectCopy}>
        <p className={styles.context}>{narrative.context}</p>
        <h3>{narrative.headline}</h3>
        <p>{narrative.summary}</p>
        <dl><dt>Responsabilidad</dt><dd>{narrative.role}</dd></dl>
        <ul className={styles.proofList}>{narrative.proof.map((item) => <li key={item}>{item}</li>)}</ul>
        {project.link && <a className={styles.textLink} href={project.link} target="_blank" rel="noreferrer">Ver producto <ArrowIcon /></a>}
      </div>
      <figure className={styles.projectVisual}><img src={image} alt={`Vista principal de ${project.title}`} /><figcaption>{project.title} · {project.year}</figcaption></figure>
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

function Contact() {
  const whatsapp = "https://wa.me/524493465877?text=" + encodeURIComponent("Hola Gerardo, vi tu portafolio y quiero conversar sobre una oportunidad o proyecto.");
  return (
    <section className={styles.contact} id="contacto">
      <motion.div {...reveal}>
        <h2>Construyamos algo que tenga sentido.</h2>
      </motion.div>
      <div className={styles.contactRoutes}>
        <motion.article {...reveal}>
          <span>Para equipos</span><h3>Estoy abierto a oportunidades profesionales.</h3>
          <div><a className={styles.primaryAction} href={resumeEs} target="_blank" rel="noreferrer">CV en español <ArrowIcon /></a><a className={styles.textLink} href={resumeEn} target="_blank" rel="noreferrer">CV in English</a></div>
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

export default function PortfolioPage() {
  const darpha = projects.find((project) => project.id === 1);
  const supporting = projects.filter((project) => [2, 3].includes(project.id));
  return <><Navigation /><main><Hero /><DarphaCase project={darpha} /><section className={styles.supporting}><div className={styles.sectionHeading}><h2>La misma disciplina, aplicada a otros contextos.</h2></div>{supporting.map((project, index) => <ProjectRow key={project.id} project={project} index={index} />)}</section><Profile /><Experience /><Contact /></main></>;
}
