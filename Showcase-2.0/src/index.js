import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Joe from './Joe.js';
import Canopy from './Canopy.js';
import Seaborn from './Seaborn.js';
import Herald from './Herald.js';
import AlgoTrading from './AlgoTrading.js';
import Jupiter from './Jupiter.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Joe} />
      <Route path="/page2" component={Canopy} />
      <Route path="/page3" component={Seaborn} />
      <Route path="/page4" component={Herald} />
      <Route path="/page5" component={AlgoTrading} />
      <Route path="/page6" component={Jupiter} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
