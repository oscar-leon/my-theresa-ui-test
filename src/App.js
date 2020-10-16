import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Detail } from "./containers";
import { NavBar } from "./components";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};

App.propTypes = {};

export default App;
