import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <h1 className={styles["copyright"]}>Developed by Hardik &copy; RE/CS</h1>
      <div className={styles["icons-container"]}>
        <FaFacebookSquare className={styles["icon"]} size="8vh" color="#143cdc" />
        <FaTwitterSquare className={styles["icon"]} size="8vh" color="#10b9bf" />
        <FaInstagramSquare className={styles["icon"]} size="8vh" color="#dd29dd" />
        <FaGithubSquare className={styles["icon"]} size="8vh" color="#00040c" />
        <FaLinkedin className={styles["icon"]} size="8vh" color="#1f6dc0" />
      </div>
    </div>
  );
}

export default Footer;
