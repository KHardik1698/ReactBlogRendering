import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import BlogTiles from "../pages/BlogTiles";
import BlogPage from "../pages/BlogPage";
import NotFound from "../pages/NotFound";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/blogs" exact component={BlogTiles} />
            <Route
              path="/blogs/:id"
              exact
              render={(props) => {
                return <BlogPage {...props} />;
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
