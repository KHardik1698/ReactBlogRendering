import { Component } from "react";
import { Link } from "react-router-dom";
import blogsUrl from "../apiCalls/ApiCalls";
import TilesMarkup from "../components/TilesMarkup";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import styles from "../styles/BlogTiles.module.css";

class BlogTiles extends Component {
  state = {
    blogs: [],
    status: "",
  };
  componentDidMount = (event) => {
    fetch(blogsUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ blogs: data.blogData, status: "Successful" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {this.state.status === "" ? (
          <h1 className={styles["loading"]}>Loading...</h1>
        ) : this.state.status === "Successful" ? (
          <div>
            <Header />
            <div className={styles["body-container"]}>
              <h1 className={styles["blogs-header"]}>Blogs Collection</h1>
              <div className={styles["main-container"]}>
                {this.state.blogs.map((blog, i) => {
                  return (
                    <div className={styles["card-container"]} key={blog.id}>
                      <Link className={styles["card-link"]} to={`/blogs/${blog.id}`}>
                        <TilesMarkup blog={blog} i={i + 1} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

export default BlogTiles;
