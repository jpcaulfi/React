import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Welcome from "./components/Welcome.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Loading from "./components/Loading.js";
import Landing from "./components/Landing.js";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/page2" component={Signup} />
      <Route path="/page3" component={Login} />
      <Route path="/page4" component={Loading} />
      <Route path="/page5" component={Landing} />
    </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
