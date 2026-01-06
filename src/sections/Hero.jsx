import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { useSmoothScroll } from "../hooks";
import styles from "./Hero.module.css";

const Hero = () => {
  const scrollToElement = useSmoothScroll();

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

        <motion.p className={styles.heroDescription} variants={itemVariants}>
          {personalInfo.tagline}
        </motion.p>

        <motion.div className={styles.heroCta} variants={itemVariants}>
          <button
            className={`${styles.ctaButton} ${styles.ctaPrimary}`}
            onClick={() => scrollToElement("projects", 60)}
          >
            Ver Proyectos
            <span>→</span>
          </button>
          <button
            className={`${styles.ctaButton} ${styles.ctaSecondary}`}
            onClick={() => scrollToElement("contact", 60)}
          >
            Contactar
          </button>
        </motion.div>

        <motion.div className={styles.heroCv} variants={itemVariants}>
          <a
            href={personalInfo.resumeSpanish}
            download="Gerardo Esparza - CV.pdf"
            className={`${styles.cvButton} ${styles.cvSpanish}`}
          >
            <span>📄</span>
            Descargar CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.heroScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => scrollToElement("about", 60)}
      >
        <span>Desliza para explorar</span>
        <span className={styles.scrollIcon}>↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;
