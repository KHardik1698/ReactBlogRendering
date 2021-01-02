import { Component } from "react";

class BlogMarkup extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.blog.title}</h2>
        <h3>{this.props.blog.author}</h3>
        <img src={this.props.blog.imageUrl} alt="Blog" />
        <p>{this.props.blog.content}</p>
        {this.props.blog.links.map((link) => {
          return (
            <div key={link.id}>
              <p>{link.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BlogMarkup;
