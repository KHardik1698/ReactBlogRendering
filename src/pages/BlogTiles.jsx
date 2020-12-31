import { Component } from "react";
import blogsUrl from "../apiCalls/ApiCalls";
import TilesMarkup from "../components/TilesMarkup";

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
        <h1>Blog Tiles Component</h1>
        {this.state.blogs.map((blog) => {
          return <TilesMarkup key={blog.id} blog={blog} />;
        })}
      </div>
    );
  }
}

export default BlogTiles;
