import { Component } from "react";

class TilesMarkup extends Component {
  render() {
    return (
      <div>
        <p>{this.props.blog.title}</p>
      </div>
    );
  }
}

export default TilesMarkup;
