import { Component } from "react";
import styles from "../styles/TilesMarkup.module.css";

class TilesMarkup extends Component {
  render() {
    return (
      <div>
        <div className={styles["blog-header"]}>
          <p className={styles["blog-title"]}>
            {this.props.i}: {this.props.blog.title}
          </p>
          <p className={styles["blog-author"]}>- a Blog by {this.props.blog.author}</p>
        </div>
        <img className={styles["blog-image"]} src={this.props.blog.imageUrl} alt="Blog" />
      </div>
    );
  }
}

export default TilesMarkup;
