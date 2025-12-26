import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBuilding,
  FaCoins,
  FaCamera,
  FaComments,
  FaStar,
  FaCheck,
  FaImages,
} from "react-icons/fa";
import { projects } from "../data/portfolio";
import ProjectGallery from "../components/ProjectGallery";
import styles from "./Projects.module.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Producción":
        return styles.statusProduction;
      case "Desarrollo":
        return styles.statusDevelopment;
      case "Completado":
        return styles.statusCompleted;
      default:
        return "";
    }
  };

  const getTechStack = (project) => {
    const allTechs = [];
    if (project.technologies.backend)
      allTechs.push(...project.technologies.backend.slice(0, 3));
    if (project.technologies.frontend)
      allTechs.push(...project.technologies.frontend.slice(0, 3));
    return allTechs.slice(0, 5);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContainer}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
          <p className={styles.sectionSubtitle}>
            Soluciones tecnológicas que he diseñado y desarrollado
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            const techs = getTechStack(project);

            return (
              <motion.div
                key={project.id}
                className={`${styles.projectCard} ${
                  isFeatured ? styles.featuredProject : ""
                }`}
                variants={itemVariants}
              >
                <div className={styles.projectImage}>
                  {project.gallery ? (
                    <div className={styles.imagePreview}>
                      <div className={styles.desktopMockup}>
                        <img
                          src={project.gallery.desktop[0]}
                          alt={`${project.title} - Desktop`}
                        />
                      </div>
                      <div className={styles.mobileMockup}>
                        <img
                          src={project.gallery.mobile[0]}
                          alt={`${project.title} - Mobile`}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      {project.category === "Sistema Empresarial" ? (
                        <FaBuilding />
                      ) : project.category === "Fintech & IA" ? (
                        <FaCoins />
                      ) : project.category === "IoT & Computer Vision" ? (
                        <FaCamera />
                      ) : (
                        <FaComments />
                      )}
                    </div>
                  )}
                  <div
                    className={`${styles.projectStatus} ${getStatusClass(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </div>
                </div>

                <div className={styles.projectContent}>
                  {isFeatured && (
                    <div className={styles.featuredBadge}>
                      <FaStar /> Proyecto Destacado
                    </div>
                  )}

                  <div className={styles.projectHeader}>
                    <div className={styles.projectCategory}>
                      {project.category}
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>

                  <p className={styles.projectDescription}>
                    {isFeatured ? project.longDescription : project.description}
                  </p>

                  {isFeatured && project.features && (
                    <div className={styles.projectFeatures}>
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className={styles.featureItem}>
                          <span className={styles.featureIcon}>
                            <FaCheck />
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={styles.projectTech}>
                    {techs.map((tech, idx) => (
                      <span key={idx} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    {project.gallery && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`${styles.projectLink} ${styles.linkGallery}`}
                      >
                        <FaImages /> Ver Galería
                      </button>
                    )}

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.projectLink} ${styles.linkPrimary}`}
                      >
                        Ver Proyecto →
                      </a>
                    ) : (
                      <span
                        className={`${styles.projectLink} ${styles.linkPrimary} ${styles.linkDisabled}`}
                      >
                        Privado
                      </span>
                    )}

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.projectLink} ${styles.linkSecondary}`}
                      >
                        GitHub
                      </a>
                    ) : (
                      <span
                        className={`${styles.projectLink} ${styles.linkSecondary} ${styles.linkDisabled}`}
                      >
                        Código Privado
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {selectedProject && selectedProject.gallery && (
          <ProjectGallery
            images={selectedProject.gallery}
            onClose={() => setSelectedProject(null)}
          />
        )}{" "}
      </div>
    </section>
  );
};

export default Projects;
