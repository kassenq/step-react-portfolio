import React from 'react';
import logo from './logo.svg';
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Experience } from './components/Experience';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/experience'} className="nav-link">Experience</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/experience' component={Experience} />
            <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
