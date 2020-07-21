import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetails";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
