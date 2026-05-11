import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaComments,
} from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolio";
import styles from "./Contact.module.css";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${personalInfo.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject,
            message: formData.message,
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario");
      }

      setSubmitStatus({
        type: "success",
        message:
          "Mensaje enviado correctamente. Revisa tu correo para confirmar la activacion de FormSubmit si es la primera vez.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "No se pudo enviar el mensaje. Intenta de nuevo o escribeme directo a gerardo.esparz4@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const getSocialIcon = (iconName) => {
    const icons = {
      FaGithub: <FaGithub />,
      FaLinkedin: <FaLinkedin />,
      FaEnvelope: <FaEnvelope />,
    };
    return icons[iconName] || null;
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactBackground}>
        <div className={styles.backgroundPattern}>
          <FaComments />
        </div>
      </div>

      <div className={styles.contactContainer}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Contacto</h2>
          <p className={styles.sectionSubtitle}>
            ¿Tienes un proyecto en mente? Hablemos
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className={styles.contactContent}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div className={styles.contactInfo} variants={itemVariants}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Información de Contacto</h3>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaEnvelope />
                </div>
                <div className={styles.infoText}>
                  <div className={styles.infoLabel}>Email</div>
                  <div className={styles.infoValue}>
                    <a href={`mailto:${personalInfo.email}`}>
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.infoText}>
                  <div className={styles.infoLabel}>Ubicación</div>
                  <div className={styles.infoValue}>
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaLinkedin />
                </div>
                <div className={styles.infoText}>
                  <div className={styles.infoLabel}>LinkedIn</div>
                  <div className={styles.infoValue}>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Perfil Profesional
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaGithub />
                </div>
                <div className={styles.infoText}>
                  <div className={styles.infoLabel}>GitHub</div>
                  <div className={styles.infoValue}>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Repositorios
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    title={link.name}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.formInput}
                  placeholder="¿En qué puedo ayudarte?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.formTextarea}
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                <span>→</span>
              </button>

              {submitStatus.message && (
                <p
                  className={`${styles.submitStatus} ${
                    submitStatus.type === "success"
                      ? styles.submitSuccess
                      : styles.submitError
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
