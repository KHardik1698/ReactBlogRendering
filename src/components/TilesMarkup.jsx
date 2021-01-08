import { Component } from "react";
import styles from "../styles/TilesMarkup.module.css";

class TilesMarkup extends Component {
  render() {
    return (
      <div>
        <div className={styles["blog-header"]}>
          <h1 className={styles["blog-title"]}>{this.props.blog.title}</h1>
          <h1 className={styles["blog-author"]}>{this.props.blog.author}</h1>
        </div>
        <img
          className={styles["blog-image"]}
          src={this.props.blog.imageUrl}
          alt="Blog"
        />
      </div>
    );
  }
}

export default TilesMarkup;
