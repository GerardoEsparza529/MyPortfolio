import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolio";
import { useSmoothScroll } from "../hooks";
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToElement = useSmoothScroll();
  const currentYear = new Date().getFullYear();

  const navSections = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre Mí" },
    { id: "experience", label: "Experiencia" },
    { id: "projects", label: "Proyectos" },
    { id: "skills", label: "Habilidades" },
    { id: "contact", label: "Contacto" },
  ];

  const getSocialIcon = (iconName) => {
    const icons = {
      FaGithub: <FaGithub />,
      FaLinkedin: <FaLinkedin />,
      FaEnvelope: <FaEnvelope />,
    };
    return icons[iconName] || null;
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className={styles.brandName}>{personalInfo.name}</h3>
            <p className={styles.brandTagline}>{personalInfo.subtitle}</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Navegación</h4>
              {navSections.map((section) => (
                <span
                  key={section.id}
                  className={styles.footerLink}
                  onClick={() => scrollToElement(section.id, 60)}
                >
                  {section.label}
                </span>
              ))}
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Conecta</h4>
              <div className={styles.footerSocial}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    title={link.name}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
