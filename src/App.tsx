import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

function App() {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">All Posts</Link>
            </li>
            <li>
              <Link to="/add-post">Create Posts</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <PostList />
            </Route>
            <Route path="/add-post">
              <AddPost />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
