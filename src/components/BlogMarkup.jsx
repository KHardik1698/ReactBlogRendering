import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/BlogMarkup.module.css";

class BlogMarkup extends Component {
  render() {
    return (
      <div className={styles["blog-container"]}>
        <main>
          <h1 className={styles["blog-title"]}>{this.props.blog.title}</h1>
          <h1 className={styles["blog-author"]}>- a Blog by {this.props.blog.author}</h1>
          <img className={styles["blog-image"]} src={this.props.blog.imageUrl} alt="Blog" />
          <p className={styles["blog-content"]}>{this.props.blog.content}</p>
        </main>
        <aside>
          <div className={styles["blog-links-container"]}>
            <p className={styles["blog-links-header"]}>Related to this Blog:</p>
            {this.props.blog.links.map((link, i) => {
              return (
                <div key={`${link.id}${i}`}>
                  <Link
                    className={styles["blog-link"]}
                    to={`/blogs/${link.id}`}
                    onClick={() => this.props.getBlog(link.id)}
                  >
                    <p className={styles["blog-link-name"]}>
                      {i + 1}: {link.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    );
  }
}

export default BlogMarkup;
