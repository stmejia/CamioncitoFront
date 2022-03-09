import './App.css';

import { Home } from "./Home";
import { Vehiculos } from "./Components/Vehiculos";
import { Pilotos } from "./Components/Pilotos";
import { Clientes } from "./Components/Clientes";
import { Viajes } from "./Components/Viajes";
import { Departamentos } from './Components/Departamentos';
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
          <Route path="/clientes" component={Clientes} />
          <Route path="/vehiculos" component={Vehiculos} />
          <Route path="/pilotos" component={Pilotos} />
          <Route path="/viajes" component={Viajes} />
          <Route path="/departamentos" component={Departamentos} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
