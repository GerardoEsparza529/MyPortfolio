import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { useSmoothScroll } from "../hooks";
import styles from "./Hero.module.css";

const Hero = () => {
  const scrollToElement = useSmoothScroll();

  const openWhatsApp = (message) => {
    const whatsappUrl = `https://wa.me/524493465877?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Background decorative elements */}
      <div className={styles.heroBackground}>
        <div className={`${styles.backgroundCircle} ${styles.circle1}`} />
        <div className={`${styles.backgroundCircle} ${styles.circle2}`} />
        <div className={`${styles.backgroundCircle} ${styles.circle3}`} />
      </div>

      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.heroTitle} variants={itemVariants}>
          Hola, soy{" "}
          <span className={styles.heroGradientText}>{personalInfo.name}</span>
        </motion.h1>

        <motion.p className={styles.heroSubtitle} variants={itemVariants}>
          {personalInfo.subtitle}
        </motion.p>

        <motion.div className={styles.heroBadges} variants={itemVariants}>
          <span className={`${styles.badge} ${styles.badgeAi}`}>✦ Inteligencia Artificial</span>
          <span className={styles.badge}>Full Stack</span>
          <span className={styles.badge}>Cloud & IoT</span>
        </motion.div>

        <motion.p className={styles.heroDescription} variants={itemVariants}>
          {personalInfo.tagline}
        </motion.p>

        <motion.div className={styles.heroCta} variants={itemVariants}>
          <button
            className={`${styles.ctaButton} ${styles.ctaPrimary}`}
            onClick={() => scrollToElement("projects", 0)}
          >
            Ver Proyectos
          </button>
          <button
            className={`${styles.ctaButton} ${styles.ctaSecondary}`}
            onClick={() =>
              openWhatsApp(
                "Hola Gerardo, vi tu portafolio y me interesa agendar una llamada para mi proyecto.\n\nNombre:\nEmpresa o negocio:\nObjetivo del proyecto:\nPresupuesto estimado:\nTiempo esperado:",
              )
            }
          >
            Agenda una llamada
          </button>
        </motion.div>

        <motion.div className={styles.heroQuickActions} variants={itemVariants}>
          <button
            type="button"
            className={styles.quickActionLink}
            onClick={() => scrollToElement("contact", 0)}
          >
            Escribeme por email
          </button>
          <button
            type="button"
            className={styles.quickActionLink}
            onClick={() =>
              openWhatsApp(
                "Hola Gerardo, vi tu portafolio y quiero hablar contigo sobre un proyecto.\n\nNombre:\nEmpresa o negocio:\nQue necesitas construir:\nTiempo estimado:",
              )
            }
          >
            WhatsApp directo
          </button>
          <button
            type="button"
            className={styles.quickActionLink}
            onClick={() =>
              openWhatsApp(
                "Hola Gerardo, quiero una cotizacion para mi proyecto.\n\nNombre:\nEmpresa o negocio:\nTipo de proyecto (web, app, IA, automatizacion):\nFuncionalidades principales:\nPresupuesto estimado:\nFecha objetivo:",
              )
            }
          >
            Cotizacion en 24h
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.heroScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => scrollToElement("projects", 0)}
      >
        <span>Desliza para explorar</span>
        <span className={styles.scrollIcon}>↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;
