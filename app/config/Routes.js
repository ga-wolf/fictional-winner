import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Search from "../components/Search";
import Details from "../components/Details";

const Routes = () => {
  return (
    <HashRouter>
      <div>
        <Link to="/">
          Home
        </Link>
        &nbsp;
        <Link to="/search">
          Search
        </Link>
        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/details/:username" component={Details} />
      </div>
    </HashRouter>
  );
};

export default Routes;
