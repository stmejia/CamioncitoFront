import './App.css';

import { Home } from "./Home";
import { Vehiculos } from "./Vehiculos";
import { Navigation } from "./Navigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          Camioncito App
        </h3>

        <Navigation />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/vehiculos" component={Vehiculos} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
