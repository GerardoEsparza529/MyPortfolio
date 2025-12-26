import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRocket, FaCloud, FaBullseye, FaUser } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import styles from "./About.module.css";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const highlights = [
    {
      icon: <FaRocket />,
      title: "Desarrollo Full Stack",
      description: "Experiencia end-to-end desde arquitectura hasta producción",
    },
    {
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      description: "AWS, Azure, Railway - gestión completa de infraestructura",
    },
    {
      icon: <FaBullseye />,
      title: "Enfoque en Resultados",
      description: "Soluciones que impulsan el negocio y reducen tiempos",
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Sobre Mí</h2>
          <p className={styles.sectionSubtitle}>
            Conoce mi trayectoria y lo que me apasiona
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className={styles.aboutContent}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className={styles.aboutImage} variants={itemVariants}>
            <div className={styles.imageWrapper}>
              {/* Placeholder for profile image */}
              <div className={styles.placeholder}>
                <FaUser />
              </div>
              {/* Uncomment and add your image */}
              {/* <img src="/path/to/your/photo.jpg" alt={personalInfo.name} /> */}
            </div>
            <div className={styles.imageBorder} />
          </motion.div>

          <motion.div className={styles.aboutText} variants={itemVariants}>
            <div>
              <h3 className={styles.aboutTitle}>{personalInfo.name}</h3>
              <p className={styles.aboutRole}>{personalInfo.title}</p>
              <p className={styles.aboutDescription}>{personalInfo.tagline}</p>
              <p className={styles.aboutDescription}>
                {personalInfo.description}
              </p>
            </div>

            <div className={styles.aboutHighlights}>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className={styles.highlight}
                  variants={itemVariants}
                >
                  <span className={styles.highlightIcon}>{highlight.icon}</span>
                  <div className={styles.highlightText}>
                    <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                    <p className={styles.highlightDescription}>
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.aboutStats}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className={styles.statItem} variants={itemVariants}>
            <span className={styles.statNumber}>4+</span>
            <span className={styles.statLabel}>Proyectos</span>
          </motion.div>
          <motion.div className={styles.statItem} variants={itemVariants}>
            <span className={styles.statNumber}>1+</span>
            <span className={styles.statLabel}>Años Experiencia</span>
          </motion.div>
          <motion.div className={styles.statItem} variants={itemVariants}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>Tecnologías</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
