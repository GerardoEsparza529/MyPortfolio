import { useState, useEffect } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useScrollPosition, useSmoothScroll, useTheme } from "../hooks";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { scrollPosition, scrollDirection } = useScrollPosition();
  const scrollToElement = useSmoothScroll();
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre Mí" },
    { id: "experience", label: "Experiencia" },
    { id: "projects", label: "Proyectos" },
    { id: "skills", label: "Habilidades" },
    { id: "contact", label: "Contacto" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToElement(sectionId, 0);
    setMobileMenuOpen(false);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px 0px 0px",
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuOpen &&
        !e.target.closest(`.${styles.mobileMenu}`) &&
        !e.target.closest(`.${styles.mobileMenuButton}`)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          scrollPosition > 100 ? styles.scrolled : ""
        } ${
          scrollDirection === "down" && scrollPosition > 400
            ? styles.hidden
            : ""
        }`}
      >
        <div className={styles.navbarContent}>
          <div className={styles.logo} onClick={() => handleNavClick("home")}>
            Gerardo Esparza
          </div>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`${styles.navLink} ${
                  activeSection === item.id ? styles.active : ""
                }`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className={styles.navActions}>
            {/* Theme Toggle */}
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Cambiar a modo claro"
                  : "Cambiar a modo oscuro"
              }
            >
              {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}
      >
        <ul className={styles.mobileMenuLinks}>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={styles.mobileMenuLink}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
