import { Component } from "react";
import blogsUrl from "../apiCalls/ApiCalls";
import BlogMarkup from "../components/BlogMarkup";

class BlogPage extends Component {
  state = {
    blog: [],
    status: "",
  };
  componentDidMount = (event) => {
    fetch(blogsUrl + "2rvqpdbpka3n3fhh")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ blog: data.blogData, status: "Successful" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h1>Blog Page Component</h1>
        <BlogMarkup blog={this.state.blog} status={this.state.status} />
      </div>
    );
  }
}

export default BlogPage;
