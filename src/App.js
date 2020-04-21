import React from 'react';
import Home from "./Routes/home";
import Cart from "./Routes/cart";
import Orders from "./Routes/orders";


import './App.css';
import {  BrowserRouter as Router,Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/orders" component={Orders}  />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
