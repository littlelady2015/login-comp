import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Switch, Route } from 'react-router';
import About from '../About';
import { Topics, specificTopics }from '../Topics';

export default class dashBoard extends React.Component { 
 render() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard/topics">Topics</Link>
        </li>
        <li>
          <Link to="/dashboard/topics/:id">Specific Topics</Link>
        </li>

      </ul>
      <Switch>
          <Route exact path="/dashboard" component={dashboard} />
          <Route path="/dashboard/about" component={About} />
          <Route exact path="/dashboard/topics" component={Topics} />
          <Route path="/dashboard/topics/:id" component={specificTopics} />
      </Switch>
    </Router>
  ) 
 }
}
export function dashboard() {
  return <h1>dashboard</h1>
}  
