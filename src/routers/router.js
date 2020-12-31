import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogTiles from "../components/BlogTiles";
import BlogPage from "../components/BlogPage";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <h1>Hello</h1>
          <Switch>
            <Route path="/blogs" exact component={BlogTiles} />
            <Route path="/blogs/:id" exact component={BlogPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
