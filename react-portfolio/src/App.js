import React from 'react';
import './App.css';
import './styles.css'
import { About } from './components/About';
import { Home } from './components/Home';
import { Experience } from './components/Experience';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <Link to={'/experience'} className="nav-link">Experience</Link>
            <Link to={'/about'} className="nav-link">About</Link>
            <Link to={'/'} className="nav-link"> Home </Link>
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
