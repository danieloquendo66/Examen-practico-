import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { FormCrud, Cupones } from "./containers";
import generarStore from "./store";

function App() {
  const store = generarStore();

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={FormCrud} />
          <Route exact path="/cupones" component={Cupones} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
