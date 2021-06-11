import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Catalog } from "./views/catalog";
import { Detail } from "./views/detail";

export function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/catalog">
          <Catalog />
        </Route>
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
        <Redirect to="/catalog" />
      </Switch>
    </Router>
  );
}
