import { Component } from "react";
import blogsUrl from "../apiCalls/ApiCalls";
import BlogMarkup from "../components/BlogMarkup";
import NotFound from "./NotFound";

class BlogPage extends Component {
  state = {
    blog: [],
    status: "",
    currentBlogId: "",
  };
  componentDidMount = (event) => {
    fetch(blogsUrl + this.props.match.params.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          blog: data.blogData,
          status: "Successful",
          currentBlogId: this.props.match.params.id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidUpdate = (event) => {
    if (this.state.currentBlogId !== this.props.match.params.id) {
      if (this.state.status !== "") this.setState({ status: "" });
      fetch(blogsUrl + this.props.match.params.id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            blog: data.blogData,
            status: "Successful",
            currentBlogId: data.blogData.id,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  getBlog = (id) => {
    fetch(blogsUrl + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          blog: data.blogData,
          status: "Successful",
          currentBlogId: id,
        });
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
        ) : this.state.status === "Successful" &&
          this.state.blog !== undefined ? (
          <BlogMarkup
            blog={this.state.blog}
            status={this.state.status}
            getBlog={this.getBlog}
            {...this.props}
          />
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

export default BlogPage;
