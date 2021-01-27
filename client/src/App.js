import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { FormCrud, Cupon } from "./components";
import generarStore from "./store";

function App() {
  const store = generarStore();

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/form" component={FormCrud} />
          <Route exact path="/" component={Cupon} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
