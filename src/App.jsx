import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Catalog } from "./views/catalog";

export function App() {

  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/catalog">
          <Catalog />
        </Route>
        <Redirect to="/catalog" />
      </Switch>
    </Router>
  );
}
