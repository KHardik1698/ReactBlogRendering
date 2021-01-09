import styles from "../styles/Loading.module.css";
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div className={styles["header-container"]}>
      <Loader type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loading;
