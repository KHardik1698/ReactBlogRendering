import { Component } from "react";
import styles from "../styles/NotFound.module.css";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className={styles["not-found-container"]}>
        {/* <img
          className={styles["not-found-image"]}
          src="https://image.freepik.com/free-vector/404-error-page-found_41910-364.jpg"
          alt="Page Not Found"
        /> */}
        <Link className={styles["back-button"]} to="/blogs">
          <button>Go Back</button>
        </Link>
      </div>
    );
  }
}

export default NotFound;
