import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from 'react-router';
import './index.css';
import App from './App';
import dashBoard from './pages/dashBoard';

ReactDOM.render(<Router>
    <Switch>
      <Route exact path='/' component={App} /> 
      <Route path='/dashboard' component={dashBoard} />
    </Switch>
  </Router>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
