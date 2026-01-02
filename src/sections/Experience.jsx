import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaTrophy, FaCheck } from "react-icons/fa";
import { experience, education } from "../data/portfolio";
import styles from "./Experience.module.css";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.experienceContainer}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Experiencia Profesional</h2>
          <p className={styles.sectionSubtitle}>
            Mi trayectoria construyendo soluciones tecnológicas
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              variants={itemVariants}
            >
              <div className={styles.timelineDot} />
              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  {exp.logo && (
                    <div className={styles.companyLogo}>
                      <img src={exp.logo} alt={`${exp.company} logo`} />
                    </div>
                  )}
                  <div className={styles.cardTitle}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <p className={styles.company}>{exp.company}</p>
                    <p className={styles.location}>{exp.location}</p>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>

                <p className={styles.description}>{exp.description}</p>

                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className={styles.responsibilities}>
                    <h4 className={styles.responsibilitiesTitle}>
                      Responsabilidades Principales
                    </h4>
                    <div className={styles.responsibilitiesList}>
                      {exp.responsibilities.slice(0, 8).map((resp, index) => (
                        <div key={index} className={styles.responsibilityItem}>
                          {resp}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className={styles.technologies}>
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className={styles.achievements}>
                    <h4 className={styles.achievementsTitle}>
                      <FaTrophy /> Logros Destacados
                    </h4>
                    <div className={styles.achievementsList}>
                      {exp.achievements.map((achievement, index) => (
                        <div key={index} className={styles.achievementItem}>
                          <span className={styles.achievementIcon}>
                            <FaCheck />
                          </span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <div className={styles.educationSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className={styles.sectionTitle}>Educación</h2>
          </motion.div>

          <motion.div
            className={styles.educationGrid}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                className={styles.educationCard}
                variants={itemVariants}
              >
                <div className={styles.educationHeader}>
                  {edu.logo ? (
                    <div className={styles.institutionLogo}>
                      <img src={edu.logo} alt={`${edu.institution} logo`} />
                    </div>
                  ) : (
                    <div className={styles.educationIcon}>
                      <FaGraduationCap />
                    </div>
                  )}
                  <div className={styles.educationInfo}>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                    <p className={styles.educationPeriod}>
                      {edu.period} • {edu.status}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
