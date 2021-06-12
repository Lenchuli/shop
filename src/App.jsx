import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Catalog } from "./views/catalog";
import { Detail } from "./views/detail";

export function App() {
  const [cart, setCart] = useState(0);

  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/catalog">
          <Catalog cart={cart} />
        </Route>
        <Route exact path="/detail/:id">
          <Detail cart={cart} setCart={setCart} />
        </Route>
        <Redirect to="/catalog" />
      </Switch>
    </Router>
  );
}
