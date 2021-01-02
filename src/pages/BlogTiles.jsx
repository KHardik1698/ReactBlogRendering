import { Component } from "react";
import blogsUrl from "../apiCalls/ApiCalls";
import TilesMarkup from "../components/TilesMarkup";
import NotFound from "./NotFound";

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
          <h1>Loading...</h1>
        ) : this.state.status === "Successful" ? (
          this.state.blogs.map((blog) => {
            return <TilesMarkup key={blog.id} blog={blog} />;
          })
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

export default BlogTiles;
