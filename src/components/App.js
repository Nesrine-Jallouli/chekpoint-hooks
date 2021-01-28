import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home';
import Description from "./Description";
import "../App.css";

function App() {


  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/description" exact component={Description}/>
          </Switch>
        
    </Router>
  );
}

export default App;