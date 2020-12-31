import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <h1>Hello</h1>
          <Switch>
            <Route path="/blogs" exact>
              <h1>All Blogs</h1>
              {/* Blog Tiles component here */}
            </Route>
            <Route path="/blogs/:id" exact>
              <h1>Single Blog</h1>
              {/* Single Blog component here */}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
