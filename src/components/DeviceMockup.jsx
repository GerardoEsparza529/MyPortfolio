import { motion } from "framer-motion";
import styles from "./DeviceMockup.module.css";

const DeviceMockup = ({ type = "desktop", image, alt }) => {
  if (type === "mobile") {
    return (
      <div className={styles.mobileWrapper}>
        <div className={styles.mobileFrame}>
          <div className={styles.mobileNotch} />
          <div className={styles.mobileScreen}>
            <img src={image} alt={alt} className={styles.mobileImage} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.desktopWrapper}>
      <div className={styles.desktopFrame}>
        <div className={styles.desktopTopBar}>
          <div className={styles.browserControls}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>
        <div className={styles.desktopScreen}>
          <img src={image} alt={alt} className={styles.desktopImage} />
        </div>
        <div className={styles.desktopBottom} />
      </div>
    </div>
  );
};

export default DeviceMockup;
