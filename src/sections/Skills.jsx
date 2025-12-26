import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPalette,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
  FaLock,
} from "react-icons/fa";
import { skills } from "../data/portfolio";
import styles from "./Skills.module.css";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName) => {
    const icons = {
      FaPalette: <FaPalette />,
      FaServer: <FaServer />,
      FaDatabase: <FaDatabase />,
      FaCloud: <FaCloud />,
      FaTools: <FaTools />,
      FaLock: <FaLock />,
    };
    return icons[iconName] || null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsContainer}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>
          <p className={styles.sectionSubtitle}>
            Tecnologías y herramientas que domino
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {Object.entries(skills).map(([key, category]) => (
            <motion.div
              key={key}
              className={styles.skillCategory}
              variants={itemVariants}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  {getIcon(category.icon)}
                </div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    className={styles.skillItem}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <span className={styles.skillName}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
