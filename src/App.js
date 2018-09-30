import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";

const App = () => (
  <article className="container">
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </HashRouter>
  </article>
);

export default App;
