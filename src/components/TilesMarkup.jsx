import { Component } from "react";

class TilesMarkup extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.blog.title}</h2>
        <h3>{this.props.blog.author}</h3>
        <img src={this.props.blog.imageUrl} alt="" />
      </div>
    );
  }
}

export default TilesMarkup;
