import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import DeviceMockup from "./DeviceMockup";
import styles from "./ProjectGallery.module.css";

const ProjectGallery = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deviceType, setDeviceType] = useState("desktop");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Detect dark mode
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);

    // Listen for dark mode changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Get current images based on device type and theme
  const getCurrentImages = () => {
    const typeImages = images[deviceType] || [];
    return typeImages.filter((img) =>
      darkMode ? img.includes("Dark") : !img.includes("Dark")
    );
  };

  const currentImages = getCurrentImages();
  const currentImage = currentImages[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, currentImages.length]);

  // Reset index when switching device type
  useEffect(() => {
    setCurrentIndex(0);
  }, [deviceType, darkMode]);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.galleryContainer}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.galleryHeader}>
          <div className={styles.deviceToggle}>
            <button
              className={`${styles.toggleBtn} ${
                deviceType === "desktop" ? styles.active : ""
              }`}
              onClick={() => setDeviceType("desktop")}
            >
              Desktop
            </button>
            <button
              className={`${styles.toggleBtn} ${
                deviceType === "mobile" ? styles.active : ""
              }`}
              onClick={() => setDeviceType("mobile")}
            >
              Mobile
            </button>
          </div>

          <button className={styles.closeBtn} onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className={styles.galleryContent}>
          <button
            className={`${styles.navBtn} ${styles.navBtnLeft}`}
            onClick={prevImage}
            disabled={currentImages.length <= 1}
          >
            <FaChevronLeft />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              className={styles.imageWrapper}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <DeviceMockup
                type={deviceType}
                image={currentImage}
                alt={`Screenshot ${currentIndex + 1}`}
              />
            </motion.div>
          </AnimatePresence>

          <button
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            onClick={nextImage}
            disabled={currentImages.length <= 1}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.galleryFooter}>
          <div className={styles.dots}>
            {currentImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.activeDot : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <div className={styles.counter}>
            {currentIndex + 1} / {currentImages.length}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectGallery;
